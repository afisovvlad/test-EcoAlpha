import { ProductItem } from 'entities/Product';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	getProductDetailData,
	getProductDetailError,
	getProductDetailIsLoading
} from '../model/selectors/productsDetail';
import { fetchProductById } from '../model/services/fetchProductById';
import cls from './ProductsDetail.module.css';

const ProductsDetail = memo(() => {
	const dispatch = useAppDispatch();
	const { id } = useParams();

	const product = useSelector(getProductDetailData);
	const isLoading = useSelector(getProductDetailIsLoading);
	const error = useSelector(getProductDetailError);

	useEffect(() => {
		if (id) {
			dispatch(fetchProductById(id));
		}
	}, [dispatch, id]);

	return (
		<div className={classNames(cls.ProductsDetail)}>
			{isLoading && <div className={cls.loading}>Loading...</div>}

			{error && (
				<div className={cls.error}>
					Произошла ошибка, попробуйте обновить страницу
				</div>
			)}

			{product ? (
				<ProductItem view='detail' product={product}></ProductItem>
			) : (
				<div className={cls.notFound}>Продукт не найден</div>
			)}
		</div>
	);
});

export default ProductsDetail;

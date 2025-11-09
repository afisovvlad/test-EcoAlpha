import { ProductItem } from 'entities/Product';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	getProductsData,
	getProductsError,
	getProductsIsLoading
} from '../model/selectors/products';
import { fetchProducts } from '../model/services/fetchProducts/fetchProducts';
import cls from './Products.module.css';

const Products = memo(() => {
	const dispatch = useAppDispatch();

	const products = useSelector(getProductsData);
	const isLoading = useSelector(getProductsIsLoading);
	const error = useSelector(getProductsError);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<section className={classNames(cls.productsWrapper)}>
			{isLoading && <div className={cls.loading}>Loading...</div>}

			{error && (
				<div className={cls.error}>
					Произошла ошибка, попробуйте обновить страницу
				</div>
			)}

			{products &&
				products.map(product => (
					<ProductItem product={product} key={product.id}></ProductItem>
				))}
		</section>
	);
});

export default Products;

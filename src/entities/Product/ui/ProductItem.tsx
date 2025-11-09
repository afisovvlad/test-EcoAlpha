/// <reference types="vite-plugin-svgr/client" />
import { memo, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import HeartIcon from 'shared/assets/icons/heart-icon.svg?react';
import { FAVORITES_ARRAY } from 'shared/const/localStorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from '../model/types/product';
import cls from './ProductItem.module.css';

interface ProductItemProps {
	product?: Product;
	view?: 'list' | 'detail';
}

export const ProductItem = memo(({ product, view }: ProductItemProps) => {
	const [isFavorite, setIsFavorite] = useState<boolean | undefined>(
		product?.isFavorite
	);

	const favoritesArrayString = localStorage.getItem(FAVORITES_ARRAY);

	const favoritesArray = useMemo(() => {
		return favoritesArrayString ? JSON.parse(favoritesArrayString) : [];
	}, [favoritesArrayString]);

	useEffect(() => {
		if (product?.id && favoritesArray.includes(product.id)) {
			setIsFavorite(true);
		} else {
			setIsFavorite(false);
		}
	}, [favoritesArray, favoritesArrayString, product]);

	const onFavoriteHandler = () => {
		setIsFavorite(isFavorite => !isFavorite);

		if (!isFavorite) {
			if (product?.id) {
				favoritesArray.push(product?.id);
			}
		} else {
			const updatedFavoritesArray = favoritesArray.filter(
				(id: number) => id !== product?.id
			);

			localStorage.setItem(
				FAVORITES_ARRAY,
				JSON.stringify(updatedFavoritesArray)
			);

			return;
		}

		localStorage.setItem(FAVORITES_ARRAY, JSON.stringify(favoritesArray));
	};

	return (
		<div className={classNames(cls.ProductItem)}>
			<div
				className={classNames(cls.favorite, {
					[cls.isFavorite]: isFavorite
				})}
				onClick={onFavoriteHandler}
			>
				<HeartIcon></HeartIcon>
			</div>

			<div className={classNames(cls.image)}>
				<img src={product?.image} />
			</div>

			<div className={classNames(cls.info)}>
				<div className={classNames(cls.title)}>{product?.title}</div>
				<div className={classNames(cls.price)}>{product?.price}$</div>
			</div>

			{view !== 'detail' && (
				<Link to={`/products/${product?.id}`}>
					<button className={classNames(cls.btnDetail)}>Подробнее</button>
				</Link>
			)}
		</div>
	);
});

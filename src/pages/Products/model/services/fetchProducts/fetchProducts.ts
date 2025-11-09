import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';
import { FAVORITES_ARRAY } from 'shared/const/localStorage';

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async (_, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;

		try {
			const response = await fetch('https://fakestoreapi.com/products');

			if (!response.ok) {
				throw new Error('Unknown error');
			}

			const data: Product[] = await response.json();

			let favoritesArray: number[] | null = null;
			const storedFavorites = localStorage.getItem(FAVORITES_ARRAY);

			if (storedFavorites) {
				favoritesArray = JSON.parse(storedFavorites) as number[];
			}

			if (favoritesArray) {
				data.forEach(product => {
					if (favoritesArray && favoritesArray.includes(product?.id)) {
						product.isFavorite = true;
					} else {
						product.isFavorite = false;
					}
				});
			} else {
				data.forEach(product => {
					product.isFavorite = false;
				});
			}

			return data;
		} catch (error) {
			return rejectWithValue({
				message: error instanceof Error ? error.message : 'Unknown error'
			});
		}
	}
);

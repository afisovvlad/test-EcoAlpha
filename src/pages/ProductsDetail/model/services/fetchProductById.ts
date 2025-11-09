import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';
import { FAVORITES_ARRAY } from 'shared/const/localStorage';

export const fetchProductById = createAsyncThunk(
	'productsDetail/fetchProductById',
	async (id: string, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;

		try {
			const response = await fetch(`https://fakestoreapi.com/products/${id}`);

			if (!response.ok) {
				throw new Error('Unknown error');
			}

			const data: Product = await response.json();

			let favoritesArray: number[] | null = null;
			const storedFavorites = localStorage.getItem(FAVORITES_ARRAY);

			if (storedFavorites) {
				favoritesArray = JSON.parse(storedFavorites) as number[];
			}

			if (favoritesArray) {
				if (favoritesArray && favoritesArray.includes(data.id)) {
					data.isFavorite = true;
				} else {
					data.isFavorite = false;
				}
			} else {
				data.isFavorite = false;
			}

			return data;
		} catch (error) {
			return rejectWithValue({
				message: error instanceof Error ? error.message : 'Unknown error'
			});
		}
	}
);

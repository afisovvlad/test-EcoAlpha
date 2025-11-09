import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormData } from '../../../ui/CreateProduct';

export const fetchCreateProduct = createAsyncThunk(
	'products/fetchCreateProduct',
	async (formData: FormData, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;

		formData.id = Date.now();

		try {
			const response = await fetch('https://fakestoreapi.com/products', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error('Unknown error');
			}

			const data = await response.json();

			console.log(data);

			return data;
		} catch (error) {
			return rejectWithValue({
				message: error instanceof Error ? error.message : 'Unknown error'
			});
		}
	}
);

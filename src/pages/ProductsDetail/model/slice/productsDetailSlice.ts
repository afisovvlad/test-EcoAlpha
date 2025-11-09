import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';
import { fetchProductById } from '../services/fetchProductById';
import { ProductsDetailSchema } from '../types/productsDetailSchema';

interface FetchProductsDetailError {
	message: string;
}

const initialState: ProductsDetailSchema = {
	isLoading: false,
	error: undefined,
	product: undefined
};

export const productsDetailSlice = createSlice({
	name: 'productsDetail',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProductById.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchProductById.fulfilled,
				(state, action: PayloadAction<Product>) => {
					state.isLoading = false;
					state.product = action.payload;
				}
			)
			.addCase(fetchProductById.rejected, (state, action) => {
				state.isLoading = false;
				const errorPayload = action.payload as
					| FetchProductsDetailError
					| undefined;
				state.error = errorPayload?.message;
			});
	}
});

export const { actions: productsDetailSliceActions } = productsDetailSlice;
export const { reducer: productsDetailSliceReducer } = productsDetailSlice;

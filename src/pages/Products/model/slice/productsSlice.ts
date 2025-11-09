import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';
import { fetchProducts } from '../services/fetchProducts/fetchProducts';
import { ProductsSchema } from '../types/productsSchema';

interface FetchProductsError {
	message: string;
}

const initialState: ProductsSchema = {
	isLoading: false,
	error: undefined,
	data: undefined
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchProducts.fulfilled,
				(state, action: PayloadAction<Product[]>) => {
					state.isLoading = false;
					state.data = action.payload;
				}
			)
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				const errorPayload = action.payload as FetchProductsError | undefined;
				state.error = errorPayload?.message;
			});
	}
});

export const { actions: productsSliceActions } = productsSlice;
export const { reducer: productsSliceReducer } = productsSlice;

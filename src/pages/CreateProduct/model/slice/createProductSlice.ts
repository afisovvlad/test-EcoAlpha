import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';
import { fetchCreateProduct } from '../services/fetchCreateProduct/fetchCreateProduct';
import { CreateProductSchema } from '../types/createProductSchema';

interface FetchProductsError {
	message: string;
}

const initialState: CreateProductSchema = {
	isLoading: false,
	error: undefined,
	newProduct: undefined
};

export const createProductSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCreateProduct.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(
				fetchCreateProduct.fulfilled,
				(state, action: PayloadAction<Product>) => {
					state.isLoading = false;
					// state.newProduct = action.payload;
				}
			)
			.addCase(fetchCreateProduct.rejected, (state, action) => {
				state.isLoading = false;
				const errorPayload = action.payload as FetchProductsError | undefined;
				state.error = errorPayload?.message;
			});
	}
});

export const { actions: createProductSliceActions } = createProductSlice;
export const { reducer: createProductSliceReducer } = createProductSlice;

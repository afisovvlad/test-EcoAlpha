import { StateSchema } from 'app/providers/StoreProvider';

export const getProductDetailData = (state: StateSchema) => {
	return state.productsDetail.product || null;
};

export const getProductDetailIsLoading = (state: StateSchema) => {
	return state.productsDetail.isLoading;
};

export const getProductDetailError = (state: StateSchema) => {
	return state.productsDetail.error || null;
};

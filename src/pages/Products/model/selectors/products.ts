import { StateSchema } from 'app/providers/StoreProvider';

export const getProductsData = (state: StateSchema) =>
	state.products.data || null;

export const getProductsIsLoading = (state: StateSchema) => {
	return state.products.isLoading;
};

export const getProductsError = (state: StateSchema) => {
	return state.products.error || null;
};

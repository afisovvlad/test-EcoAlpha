import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { createProductSliceReducer } from 'pages/CreateProduct/model/slice/createProductSlice';
import { productsSliceReducer } from 'pages/Products/model/slice/productsSlice';
import { productsDetailSliceReducer } from 'pages/ProductsDetail/model/slice/productsDetailSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		products: productsSliceReducer,
		productsDetail: productsDetailSliceReducer,
		createProduct: createProductSliceReducer
	};

	const store = configureStore({
		reducer: rootReducers,
		preloadedState: initialState,
		devTools: true
	});

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

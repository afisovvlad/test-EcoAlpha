import App from 'app/App';
import { CreateProduct } from 'pages/CreateProduct';
import { Products } from 'pages/Products';
import { ProductsDetail } from 'pages/ProductsDetail';
import { createBrowserRouter, Navigate } from 'react-router';

export enum AppRoutes {
	PRODUCTS = 'products',
	PRODUCTS_DETAIL = 'products_detail',
	CREATE_PRODUCT = 'create_product',

	// last
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.PRODUCTS]: '/products',
	[AppRoutes.PRODUCTS_DETAIL]: '/products/:id',
	[AppRoutes.CREATE_PRODUCT]: '/create-product',

	[AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig = [
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				path: '/',
				element: <Navigate to={RoutePath.products} replace />
			},
			{
				path: RoutePath.products,
				element: <Products></Products>
			},
			{
				path: RoutePath.products_detail,
				element: <ProductsDetail></ProductsDetail>
			},
			{
				path: RoutePath.create_product,
				element: <CreateProduct></CreateProduct>
			},
			{
				path: RoutePath.not_found,
				element: <Navigate to={RoutePath.products} replace />
			}
		]
	}
];

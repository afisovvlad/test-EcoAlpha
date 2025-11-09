import { CreateProductSchema } from 'pages/CreateProduct';
import { ProductsSchema } from 'pages/Products';
import { ProductsDetailSchema } from 'pages/ProductsDetail';

export interface StateSchema {
	products: ProductsSchema;
	productsDetail: ProductsDetailSchema;
	createProduct: CreateProductSchema;
}

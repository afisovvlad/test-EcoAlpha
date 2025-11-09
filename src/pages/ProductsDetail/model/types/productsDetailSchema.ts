import { Product } from 'entities/Product';

export interface ProductsDetailSchema {
	isLoading?: boolean;
	error?: string;
	product?: Product;
}

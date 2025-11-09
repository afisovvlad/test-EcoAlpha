import { Product } from 'entities/Product';

export interface CreateProductSchema {
	isLoading?: boolean;
	error?: string;
	newProduct?: Product;
}

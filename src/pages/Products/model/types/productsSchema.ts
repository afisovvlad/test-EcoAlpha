import { Product } from 'entities/Product';

export interface ProductsSchema {
	isLoading?: boolean;
	error?: string;
	data?: Product[];
}

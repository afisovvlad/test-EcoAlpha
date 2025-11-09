export interface Product {
	title: string;
	id: number;
	image: string;
	price: number;
	description: string;
	category: string;
	isFavorite?: boolean;
}

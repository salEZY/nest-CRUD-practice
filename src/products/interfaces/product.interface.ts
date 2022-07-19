export interface Product {
    id: number,
    name: string,
    qty: number,
    price: number
    productDetails: ProductDetails
}

export interface ProductDetails {
    partNumber: string;
    dimension?: string;
    weight?: number;
    origin?: string;
    manufacturer?: string;
}

export interface ProductToUpdate {
    name?: string,
    qty?: number,
    price?: number
    partNumber?: string;
    dimension?: string;
    weight?: number;
    origin?: string;
    manufacturer?: string;
}
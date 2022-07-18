export interface Product {
    id: number,
    name: string,
    qty: number,
    price: number
}

export interface ProductToUpdate {
    name: string,
    qty: number,
    price: number
}
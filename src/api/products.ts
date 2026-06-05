import type { Product } from "../models/Card";

const API_URL = "http://localhost:8080";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(
        `${API_URL}/v1/catalog/products?order_by=date`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos");
    }

    const data = await response.json();

    return data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        artist: product.artist,
        image: product.images?.[0] ?? "",
        price: product.salePrice
    }));
}
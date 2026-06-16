import type { Product } from "../models/Card";
import { ENV } from "./environment";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/products?order_by=date`
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
        price: product.salePrice,
        slug: product.slug
    }));
}

export interface DetailedProductType {
    id: string;
    productName: string;
    artist: string;
    artistImage: string;
    realPrice: number;
    salePrice: number;
    discount: number;
    stock: number;
    slug: string;
    images: string[];
    type: string;
    status: string;
    tracklist: string[];
    genres: string[];
}

export async function getProductDetail(slug: string): Promise<DetailedProductType> {
    const response = await fetch(`${ENV.VITE_API_URL}/v1/catalog/products/${slug}`);

    if (!response.ok) {
        throw new Error("No se pudo obtener el detalle del producto");
    }

    const product = await response.json();
    
    let discount = 0;
    if (product.salePrice && product.salePrice > 0 && product.realPrice > 0) {
        discount = Math.round(((product.realPrice - product.salePrice) / product.realPrice) * 100);
    }

    return {
        ...product,
        discount
    };
}

export async function getSaleProducts(): Promise<Product[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/products?status=sale`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos en oferta");
    }

    const data = await response.json();

    return data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        artist: product.artist,
        image: product.images?.[0] ?? "",
        price: product.salePrice,
        slug: product.slug
    }));
}

export async function getPresaleProducts(): Promise<Product[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/products?status=presale`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos presale");
    }

    const data = await response.json();

    return data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        artist: product.artist,
        image: product.images?.[0] ?? "",
        price: product.salePrice,
        slug: product.slug
    }));
}
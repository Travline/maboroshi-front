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
        hoverImage: product.images?.[1] ?? product.images?.[0] ?? "",
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
    hoverImage: string;
    type: string;
    status: string;
    tracklist: string[];
    genres: string[];
    spotifyId?: string;
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
        discount,
        spotifyId: product.spotifyId ?? product.spotify_id 
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
        hoverImage: product.images?.[1] ?? product.images?.[0] ?? "",
        price: product.salePrice,
        slug: product.slug
    }));
}

export async function getPresaleProducts(limit?: number): Promise<Product[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/products?status=presale`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos presale");
    }

    const data = await response.json();

    const products = data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        artist: product.artist,
        image: product.images?.[0] ?? "",
        hoverImage: product.images?.[1] ?? product.images?.[0] ?? "",
        price: product.salePrice,
        slug: product.slug
    }));

    return limit ? products.slice(0, limit) : products;
}

export async function getOfertProducts(limit?: number): Promise<Product[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/products?order_by=discount`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos en oferta");
    }

    const data = await response.json();

    const products = data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        artist: product.artist,
        image: product.images?.[0] ?? "",
        hoverImage: product.images?.[1] ?? product.images?.[0] ?? "",
        price: product.salePrice,
        realPrice: product.realPrice,
        slug: product.slug
    }));

    return limit ? products.slice(0, limit) : products;
}

export async function getLatestProducts(limit?: number): Promise<Product[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/products?order_by=date`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos recién llegados");
    }

    const data = await response.json();

    const products = data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        artist: product.artist,
        image: product.images?.[0] ?? "",
        hoverImage: product.images?.[1] ?? product.images?.[0] ?? "",
        price: product.salePrice,
        realPrice: product.realPrice,
        slug: product.slug
    }));

    return limit ? products.slice(0, limit) : products;
}

export async function getPicksProducts(): Promise<Product[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/products/recommended`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([
                "DATA VINYL LIMITED EDITION",
                "Nectar (Colored Vinyl) Vinyl 2LP",
                "Felicilandia 2LP Vinyl",
                "Sayonara Finales Alternos [2LP] (Silver Vinyl)",
                "Thriller [LP]",
                "Papota (Vinilo de color baby pink)",
                "private music [LP - Fog]",
                "OMAKASE VINYL LIMITED EDITION",
                "Hybrid Theory [LP]",
                "El Madrileño Vinilo"
            ])
        }
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos MABOROSHI PICKS");
    }

    const data = await response.json();

    return data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        artist: product.artist,
        image: product.images?.[0] ?? "",
        hoverImage: product.images?.[1] ?? product.images?.[0] ?? "",
        price: product.salePrice,
        realPrice: product.realPrice,
        slug: product.slug
    }));

}
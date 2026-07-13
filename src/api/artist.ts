import type { Album, Artist } from "../models/Artist";
import { ENV } from "./environment";

export async function getArtists(): Promise<Artist[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/artists`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo Artistas");
    }

    const data = await response.json();

    return data.map((artist: any) => ({
        id: artist.id,
        name: artist.name,
        image: artist.image,
        albums: []
    }));    
}

export async function getProductsByArtist(name: string): Promise<Album[]> {
    const response = await fetch(
        `${ENV.VITE_API_URL}/v1/catalog/artists/products?name=${encodeURIComponent(name)}`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo productos por artista");
    }

    const data = await response.json();

    console.log("Artista:", name);
    console.log("Productos:", data);

    return data.map((product: any) => ({
        id: product.productId,
        name: product.productName,
        img: product.images?.[0] ?? "",
        slug: product.slug
    }));
}
    

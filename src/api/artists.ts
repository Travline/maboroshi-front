import type { Artist } from "../models/Artist";

const API_URL = "http://localhost:8080";

export async function getArtists(): Promise<Artist[]> {
    const response = await fetch(
        `${API_URL}/v1/catalog/artists`
    );

    if (!response.ok) {
        throw new Error("Error obteniendo artistas");
    }

    const data = await response.json();

    return data.map((artist: any) => ({
        id: artist.artistId,
        name: artist.name,
        image: artist.image
    }));
}
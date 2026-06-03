import type { Artist } from "../models/Artist"

export const getArtist = async (): Promise<Artist[]> => {
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve(artist);
            }, 200);
    });
}

export const artist: Artist[] = [
    {
        id: "1",
        name: "Kendrick Lamar",
        image: "https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918",
        albums: [
            {
                id: "1", 
                name: "GNX",
                img: "https://i.scdn.co/image/ab67616d0000b273e2a0a166493a2bde5480a420"
            },

            {
                id: "2", 
                name: "DAMN.",
                img: "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699"
            },
            {
                id: "3", 
                name: "MR. MORALE & THE BIG STEPPERS",
                img: "https://i.scdn.co/image/ab67616d0000b2732e02117d76426a08ac7c174f"
            },
            {
                id: "4", 
                name: "GOOD KID, M.A.A.D CITY",
                img: "https://i.scdn.co/image/ab67616d0000b27355162d1402079f3de5cfae55"
            },

        ]
    },


];
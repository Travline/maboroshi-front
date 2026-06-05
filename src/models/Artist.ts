export interface Album {
    id: string;
    name: string;
    img: string;
}

export interface Artist {
    id: string;
    name: string;
    image: string;
    albums: Album[];
}
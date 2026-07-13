export interface Album{
    id: string;
    name: string;
    img: string;
    slug?: string;
}


export interface Artist{
    id: string;
    name: string;
    image: string;
    albums: Album[];
}
import type { Product } from "../models/Card"

export const getPicks = async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(picks);
        }, 200);
});
}

export const getVinylCollections = async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vinylCollections);
        }, 200);
    });
}

export const picks: Product[] = [
  {
    id: "1",
    name: "Sayonara Finales Alternos",
    artist: "Álvaro Díaz",
    image: "https://i.scdn.co/image/ab67616d0000b27359c02b14e74955fe8e923f2d",
    price: 19.99
  },

  {
    id: "2",
    name: "Epistolares+",
    artist: "AKRIILA",
    image: "https://i.scdn.co/image/ab67616d0000b2730534a0957068a7f924017ed1",
    price: 25.00
  },
  {
    id: "3",
    name: "Nectar",
    artist: "Joji",
    image: "https://i.scdn.co/image/ab67616d0000b2738da6404284573219a9b1e2f4",
    price: 16.25
  },

  {
    id: "4",
    name: "$AD BOYZ 4 LIFE II",
    artist: "Junior H",
    image: "https://i.scdn.co/image/ab67616d0000b273ef88ad49166e31598ff7d4d0",
    price: 19.99
  },
  
  {
    id: "5",
    name: "POR CESÁREA",
    artist: "Dillom",
    image: "https://i.scdn.co/image/ab67616d0000b27378d066acf66eb772239cca78",
    price: 19.99
  },
    
  {
    id: "6",
    name: "UN VERANO SIN TI",
    artist: "Bad Bunny",
    image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
    price: 19.99
  },
    
  {
    id: "7",
    name: "GRACE",
    artist: "Jeff Buckley",
    image: "https://i.scdn.co/image/ab67616d0000b273afc2d1d2c8703a10aeded0af",
    price: 19.99
  },
      
  {
    id: "8",
    name: "HEROES & VILLAINS",
    artist: "Metro Boomin",
    image: "https://i.scdn.co/image/ab67616d0000b273c4fee55d7b51479627c31f89",
    price: 19.99
  },

  {
    id: "9",
    name: "DAISY",
    artist: "Rusowsky",
    image: "https://i.scdn.co/image/ab67616d0000b273dc9c43138a621ee63a7bc863",
    price: 19.99
  },
      
  {
    id: "10",
    name: "El Madrileño",
    artist: "C. Tangana",
    image: "https://i.scdn.co/image/ab67616d0000b273d8ec0490534e13599f4c2a46",
    price: 19.99
  },
]

export const vinylCollections: Product[] = [
  {
    id: "11",
    name: "DATA",
    artist: "Tainy",
    image: "https://i.scdn.co/image/ab67616d0000b273f885fb64a381318a1c9c14e4",
    price: 19.99
  },

  {
    id: "12",
    name: "IGOR",
    artist: "Tyler, The Creator",
    image: "https://i.scdn.co/image/ab67616d0000b27330a635de2bb0caa4e26f6abb",
    price: 25.00
  },
  {
    id: "13",
    name: "Artaud",
    artist: "Pescado Rabioso",
    image: "https://i.scdn.co/image/ab67616d0000b27350db5a166ea23d5d6c4cd387",
    price: 16.25
  },

  {
    id: "14",
    name: "Starboy",
    artist: "The Weeknd",
    image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
    price: 19.99
  },
  
  {
    id: "15",
    name: "I'M PART",
    artist: "Easykid",
    image: "https://i.scdn.co/image/ab67616d0000b27343bb1b887f63c961473ff573",
    price: 19.99
  },
    
  {
    id: "16",
    name: "PAPOTA",
    artist: "CA7RIEL & Paco Amoroso",
    image: "https://i.scdn.co/image/ab67616d0000b273bc685f62e450d0384f9cb2e0",
    price: 16.25
  },
    
  {
    id: "17",
    name: "ROY",
    artist: "Nsqk",
    image: "https://i.scdn.co/image/ab67616d0000b273628b6b407154a6817f515794",
    price: 19.99
  },
      
  {
    id: "18",
    name: "TODOS LOS DÍAS TODO EL DÍA",
    artist: "LATIN MAFIA",
    image: "https://i.scdn.co/image/ab67616d0000b2735e92f2d649b34dbf56cf2264",
    price: 19.99
  },

  {
    id: "19",
    name: "Random Access Memories",
    artist: "Daft Punk",
    image: "https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
    price: 19.99
  },
      
  {
    id: "20",
    name: "OSCURO ÉXTASIS",
    artist: "WOS",
    image: "https://i.scdn.co/image/ab67616d0000b273cdb97c1de867f1b7ae0dc443",
    price: 19.99
  },
]
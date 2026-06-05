import './App.css'
import { Slider } from './components/Sliders/Sliders'
import { useState, useEffect } from 'react'
import { getPicks, getVinylCollections } from './mocks/cards'
import type { Product } from "./models/Card"
import { Collections } from './components/Collections/Collections'
import { ArtistCard } from './components/Artist/Artist'
import { getArtist } from './mocks/artist'
import type { Artist } from './models/Artist'
import { getProducts } from "./api/products";


function App() {
  const [picks, setPicks] = useState<Product[]>([]);
  const [vinylCollections, setVinylCollections] = useState<Product[]>([]);
  const [artist, setArtist] = useState<Artist[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const picksData = await getPicks();

      const vinylData = await getVinylCollections();
      const artistsData = await getArtist();

      setPicks(picksData);
      setVinylCollections(vinylData);
      setArtist(artistsData);
    };

    loadData();

    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();

  }, []);


  if (loading) {
    return <h1>Cargando productos...</h1>;
  }
  return (
    <>
      <main>
        <div>
          <Slider
            title="MABOROSHI COLLECTIONS"
            products={products}
          />

          <Slider title="MABOROSHI PICKS" products={products} />
        </div>

        <Collections />

        <div>
          <Slider title="MABOROSHI COLLECTIONS" products={picks} />

        </div>
        <div>
          <ArtistCard artist={artist} />
        </div>
      </main>
    </>
  )
}

export default App
import './App.css'
import { Slider } from './components/Sliders/Sliders'
import { useState, useEffect } from 'react'
import type { Product } from "./models/Card"
import { Collections } from './components/Collections/Collections'
import { ArtistCard } from './components/Artist/Artist'
import { getArtist } from './mocks/artist'
import type { Artist } from './models/Artist'
import { getPresaleProducts, getOfertProducts, getLatestProducts, getPicksProducts } from "./api/products";
import { MaboroshiTopCard } from './components/MaboroshiTopCard/MaboroshiTopCard'

function App() {
  const [artist, setArtist] = useState<Artist[]>([]);
  const [ofertProducts, setOfertProducts] = useState<Product[]>([]);
  const [presaleProducts, setPresaleProducts] = useState<Product[]>([]);
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);
  const [picksProducts, setPicksProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [artistsData, ofertData, presaleData, latestData, picksData] =
          await Promise.all([
            getArtist(),
            getOfertProducts(10),
            getPresaleProducts(10),
            getLatestProducts(10),
            getPicksProducts()
          ]);

        setArtist(artistsData);
        setOfertProducts(ofertData);
        setPresaleProducts(presaleData);
        setLatestProducts(latestData);
        setPicksProducts(picksData);
      } catch (error) {
        console.error("Error cargando los datos de la app:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  return (
    <>
      <main>
        <MaboroshiTopCard />
        <Slider
          title="OFERTA"
          products={ofertProducts}
        />

        <Slider
          title="PRE SALE"
          products={presaleProducts}
        />

        <Collections />

        <Slider
          title="RECIÉN LLEGADOS"
          products={latestProducts}
        />

        <Slider
          title="MABOROSHI PICKS"
          products={picksProducts}
        />

        <div>
          <ArtistCard artist={artist} />
        </div>
      </main>
    </>
  )
}

export default App
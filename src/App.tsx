import './App.css'
import { Slider } from './components/Sliders/Sliders'
import { useState, useEffect } from 'react'
import type { Product } from "./models/Card"
import { Collections } from './components/Collections/Collections'
import { ArtistCard } from './components/Artist/Artist'
import { getArtist } from './mocks/artist'
import type { Artist } from './models/Artist'
import { getProducts, getSaleProducts, getPresaleProducts } from "./api/products";
import { MaboroshiTopCard } from './components/MaboroshiTopCard/MaboroshiTopCard'

function App() {
  const [artist, setArtist] = useState<Artist[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [saleProducts, setSaleProducts] = useState<Product[]>([]);
  const [presaleProducts, setPresaleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [artistsData, productsData, saleData, presaleData] =
          await Promise.all([
            getArtist(),
            getProducts(),
            getSaleProducts(),
            getPresaleProducts()
          ]);

        setArtist(artistsData);
        setProducts(productsData);
        setSaleProducts(saleData);
        setPresaleProducts(presaleData);

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
          products={saleProducts}
        />

        <Slider
          title="PRE SALE"
          products={presaleProducts}
        />

        <Collections />

        <Slider
          title="RECIÉN LLEGADOS"
          products={products}
        />

        <Slider
          title="MABOROSHI PICKS"
          products={products}
        />

        <div>
          <ArtistCard artist={artist} />
        </div>
      </main>
    </>
  )
}

export default App
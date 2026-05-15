import './App.css'
import { Slider } from './components/Sliders/Sliders'
import { useState, useEffect } from 'react'
import { getPicks, getVinylCollections } from './mocks/cards'
import type { Product } from "./models/Card"
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

function App() {
  const [picks, setPicks] = useState<Product[]>([]);
  const [vinylCollections, setVinylCollections] = useState<Product[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const picksData = await getPicks();
      const vinylData = await getVinylCollections();

      setPicks(picksData);
      setVinylCollections(vinylData);
    }

    loadData();

  }, []);

  return (
    <>
      <Header />
      <main>
        <div>
        <Slider title="MABOROSHI COLLECTIONS" products={picks} />

        <Slider title="MABOROSHI PICKS" products={vinylCollections} />

      </div>
        <Banner
          title="NOMBRE DEL DISCO"
          artist="Autor"
          price={200}
          image="https://external-preview.redd.it/ca7riel-paco-amoroso-free-spirits-v0-DQQXTNsYcjYuDliac7olS44dawB_Cbj47BEeYdaYLuw.jpeg?auto=webp&s=bcc4419ea12e08582e9b84a21ab13f6981a68b61"
          date="Released February 00, 0000"
        />
        <div>
        <Slider title="MABOROSHI COLLECTIONS" products={picks} />

        <Slider title="MABOROSHI PICKS" products={vinylCollections} />

      </div>
      </main>
      <Footer />
    </>
  )
}

export default App
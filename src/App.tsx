import './App.css'
import { Slider } from './components/Sliders/Sliders'
import { useState, useEffect } from 'react'
import { getPicks, getVinylCollections } from './mocks/cards'
import type { Product } from "./models/Card"
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Collections } from './components/Collections/Collections'
import { ToolbarModal } from './components/ToolbarModal/ToolbarModal'

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
      <ToolbarModal />
      <main>
        <div>
          <Slider title="MABOROSHI COLLECTIONS" products={picks} />

          <Slider title="MABOROSHI PICKS" products={vinylCollections} />

        </div>
        <Collections />
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
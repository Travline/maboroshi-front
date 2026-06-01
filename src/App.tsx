import './App.css'
import { Slider } from './components/Sliders/Sliders'
import { useState, useEffect } from 'react'
import { getPicks, getVinylCollections } from './mocks/cards'
import type { Product } from "./models/Card"
import { Collections } from './components/Collections/Collections'

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
    </>
  )
}

export default App
import './App.css'
import { Collection } from './components/Collections/Collections'
import { useState, useEffect } from 'react'
import { getPicks, getVinylCollections } from './mocks/cards'
import type { Product } from "./models/Card"

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
      
      <div>
        <Collection title="MABOROSHI COLLECTIONS" products={picks} />

        <Collection title="MABOROSHI PICKS" products={vinylCollections} />

      </div>
    </>
  )
}

export default App

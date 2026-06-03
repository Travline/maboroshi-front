import './App.css'
import { Slider } from './components/Sliders/Sliders'
import { useState, useEffect } from 'react'
import { getPicks, getVinylCollections } from './mocks/cards'
import type { Product } from "./models/Card"
import { Collections } from './components/Collections/Collections'
import { ArtistCard } from './components/Artist/Artist'
import {getArtist } from './mocks/artist'
import type { Artist } from './models/Artist'

function App() {
  const [picks, setPicks] = useState<Product[]>([]);
  const [vinylCollections, setVinylCollections] = useState<Product[]>([]);
  const [artist, setArtist] = useState<Artist[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const picksData = await getPicks();

      const vinylData = await getVinylCollections();  
      const artistsData = await getArtist();


      setPicks(picksData);
      setVinylCollections(vinylData);
      setArtist(artistsData);
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

        </div>
        <div>
          <ArtistCard artist={artist} />
        </div>
      </main>
    </>
  )
}

export default App
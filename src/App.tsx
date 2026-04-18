import './App.css'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Contenido de la ruta "/"</h1>
      <Banner title="Nombre del disco"
        artist="Autor"
        price={200}
        image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
        background="https://images.unsplash.com/photo-1497032205916-ac775f0649ae" />

      </main>
      <Footer />
    </>
  )
}

export default App
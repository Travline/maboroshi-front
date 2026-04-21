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
        <Banner
          title="NOMBRE DEL DISCO"
          artist="Autor"
          price={200}
          image="https://external-preview.redd.it/ca7riel-paco-amoroso-free-spirits-v0-DQQXTNsYcjYuDliac7olS44dawB_Cbj47BEeYdaYLuw.jpeg?auto=webp&s=bcc4419ea12e08582e9b84a21ab13f6981a68b61"
          date="Released February 00, 0000"
        />

      </main>
      <Footer />
    </>
  )
}

export default App
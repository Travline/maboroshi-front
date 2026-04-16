import './App.css'
import { Collection } from './components/Collections/Collections'
import { cards } from './mocks/cards'

function App() {

  return (
    <>
      <h1>Contenido de la ruta "/"</h1>
      <div>
        <Collection products={cards} />
      </div>
    </>
  )
}

export default App

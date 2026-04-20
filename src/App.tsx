import './App.css'
import { Collection } from './components/Collections/Collections'
import { cards } from './mocks/cards'

function App() {

  return (
    <>
      
      <div>
        <Collection products={cards} />
      </div>
    </>
  )
}

export default App

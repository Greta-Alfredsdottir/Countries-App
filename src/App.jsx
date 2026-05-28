import { useState } from 'react'
import { Cards } from './componenter/cards'
import { lande } from "./componenter/lande";
import { fetchCountries } from "./fetch/fetch";
import { Footer } from "./componenter/footer";

export const dynamic = 'force-dynamic'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Cards/>
    </>
  )
}

export default App

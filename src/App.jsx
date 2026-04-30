import { useState } from 'react'
import { Header } from './componenter/header'
import { Footer } from './componenter/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    <Footer/>
    </>
  )
}

export default App

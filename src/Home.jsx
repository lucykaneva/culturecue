import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TripForm from './components/TripForm'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TripForm>

     </TripForm>
      
    </>
  )
}

export default Home

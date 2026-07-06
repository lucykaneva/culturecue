import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TripForm from './components/TripForm'
import Results from './components/Results'

function Home() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  function saveData(object){
    setData(object)
  }
  return (
    <>
     <TripForm onGenerate={saveData}>
      
     </TripForm>
     {data && <Results tripData = {data}></Results>}
      
    </>
  )
}

export default Home

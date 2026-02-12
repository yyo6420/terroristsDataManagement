import { useState } from 'react'
import './App.css'
import NavBar from '../navBar/NavBar';
import TerirstsData from '../teroristsData/TeroristsData';
import teroristsData from '../../terorists/terorists';

function App() {
  const [data, setData] = useState({
    
  })

  return (
    <>
    <NavBar />

    <div className='dataTeroristsDiv'>
      <TerirstsData />
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import VerticalNavbar from './VerticalNavbar/VerticalNavbar'
import Home from './Home/Home'
function App() {

  // const [value, setValue] = useState('');

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  return (<div className='main-container'>
   <VerticalNavbar/>
   <Home/>
   </div>
  )
}

export default App

import './App.css'
import Home from './Component/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Detailspage from './Component/Detailspage';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:idMeal' element={<Detailspage />} />
      </Routes>

    </>
  )
}

export default App

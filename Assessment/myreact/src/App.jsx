import './App.css'
import Signup from './components/signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Api from './components/api'
  function App() {
  return (
    <>
     
     <Navbar/>
     <Routes>
    
    
      <Route path='/Api' element={<Api/>}/>
      <Route path='/Signup' element ={<Signup/>}/>
     </Routes><br /><br /><br/>
    </>
  )
}
export default App

import Loginsignup from './routes/Loginsignup.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/loginsignup" element ={<Loginsignup/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

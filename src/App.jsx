import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Projects from './components/Projects.jsx'
import Home from './components/Home.jsx'
function App() {
 
  return (
    <main>
      <div>
      <BrowserRouter>
      <Navbar/>
      <hr/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/projects' element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
       

      </div>
    </main>
  )
}

export default App

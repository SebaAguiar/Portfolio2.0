import './App.css'
import { Route, Routes } from 'react-router'
import LandingPage from './routes/LandingPage'
import AboutMe from './routes/AboutMe'
import Experience from './routes/Experience'
import Resume from './routes/Resume'
import Contact from './routes/Contact'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

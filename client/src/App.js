import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SkillsProvider from './context/SkillsContext'
import AOS from 'aos'
import ProjectsProvider from './context/ProjectContext'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import ProjectsPage from './pages/ProjectsPage'
import 'aos/dist/aos.css'
import './App.css'
import BlogPage from './pages/BlogPage'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <SkillsProvider>
      <ProjectsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/projects/:title"
            element={<ProjectDetails />}
          />
        </Routes>
      </ProjectsProvider>
    </SkillsProvider>
  )
}

export default App

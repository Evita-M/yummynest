import { Route, Routes } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'
import { Navbar } from './components/navbar/Navbar'
import './App.css'
import RecipesPage from './pages/RecipesPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path=':id' element={<CategoryPage />} />
        <Route path='/recipes' element={<RecipesPage />} />
      </Routes>
    </>
  )
}

export default App

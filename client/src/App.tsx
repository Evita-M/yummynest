import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import './App.css'
import RecipesPage from './pages/RecipesPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import './App.css'
import RecipesPage from './pages/RecipesPage'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App

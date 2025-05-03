import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import { Navbar } from './layout/Navbar'
import RecipesPage from './pages/Recipes'
import CartPage from './pages/Cart'
import ProductPage from './pages/Product'
import ProductsPage from './pages/Products'

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Recipes',
    href: '/recipes',
  },
  {
    label: 'Products',
    href: '/products',
  },
]

function App() {
  return (
    <>
	<Navbar links={navLinks} />
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

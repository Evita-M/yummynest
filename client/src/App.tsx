import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '@/pages/Home';
import { Navbar } from '@/layout/Navbar';
import RecipesPage from '@/pages/Recipes';
import CartPage from '@/pages/Cart';
import ProductPage from '@/pages/Product';
import ProductsPage from '@/pages/Products';
import routes from './routes';

const navLinks = [
  {
    label: 'Home',
    href: routes.home,
  },
  {
    label: 'Recipes',
    href: routes.recipes,
  },
  {
    label: 'Products',
    href: routes.products,
  },
];

function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.recipes} element={<RecipesPage />} />
        <Route path={routes.products}>
          <Route index element={<ProductsPage />} />
          <Route path={`${routes.products}/:id`} element={<ProductPage />} />
        </Route>
        <Route path={routes.cart} element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;

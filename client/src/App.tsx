import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '@/pages/home';
import { Navbar } from '@/layout';
import CartPage from '@/pages/cart';
import ProductPage from '@/pages/product';
import ProductsPage from '@/pages/products';
import routes from '@/shared/variables/routes';

const navLinks = [
  {
    label: 'Home',
    href: routes.home,
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

import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '@/pages/Home';
import { Navbar } from '@/layout/Navbar';
import CartPage from '@/pages/Cart';
import ProductPage from '@/pages/Product';
import ProductsPage from '@/pages/Products';
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

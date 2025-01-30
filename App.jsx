import 'remixicon/fonts/remixicon.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import 'animate.css';

import Products from './components/Products'
import AdminProducts from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import Dashbord from './components/Admin/Dashbord'
import Payments from './components/Admin/Payments'
import Settings from './components/Admin/Settings'
import Custmores from './components/Admin/Custmores'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Category from './components/Category'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact';
import Mix from './components/Mix';
import PreGuard from './components/Guard/preGuard';
import Cart from './components/Cart';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        <Route element={<PreGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/contact-us" element={<Contact />} />
        <Route path="/Mix" element={<Mix />} />
        <Route path="/admin">
          <Route path="products" element={<AdminProducts />} />
          <Route path="custmores" element={<Custmores />} />
          <Route path="orders" element={<Orders />} />
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />


        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
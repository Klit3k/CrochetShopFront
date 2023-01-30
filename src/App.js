import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/authorization/Login'
import PrivateRoutes from './utils/PrivateRoutes'
import Register from './pages/authorization/Register';
import ClientPanel from './pages/panels/client/ClientPanel';
import AdminPanel from './pages/panels/admin/AdminPanel';
import AdminRoutes from './utils/AdminRoutes';

import Logout from './pages/authorization/Logout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './pages/product/AddProduct';
import GetListOfProducts from './pages/product/GetListOfProducts';
import GetProduct from './pages/product/GetProduct';
import GuestPanel from './pages/panels/guest/GuestPanel'
import EditProduct from './pages/product/EditProduct'
import { Navigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AccountPanel from './pages/panels/client/AccountPanel';
import AccountNavbar from './pages/navigation/AccountNavbar';
import OrderDetails from './pages/order/OrderDetails';
import GuestRoutes from './utils/GuestRoutes';
import NotFound from './utils/NotFound';
// import Cart from './pages/cart/Cart';
import Shopping from './pages/shopping/Shopping';
import Cart from './pages/shopping/components/Cart'
import MainPage from './pages/shopping/components/MainPage';
import Product from './pages/shopping/components/Product';
import ThankYou from './ThankYou';
import RemoveProduct from './pages/product/RemoveProduct';
import GetProductGuest from './pages/product/GetProductGuest'
function App() {

  return (
    <Router>
        <Routes>

          <Route element={<PrivateRoutes/>}>
              <Route path='/home' element={<Shopping/>}>
                <Route path={'/home'} element={<MainPage/>}/>
                <Route path="/home/cart" element={<Cart />}/>
                <Route path='/home/product/:id' element={<GetProduct/>}/>
                <Route path='/home/account' element={<AccountNavbar/>}/>
                <Route path='/home/cart' element={<Cart/>}/>
                <Route path='/home/account/order/:orderId' element={<OrderDetails/>}/>
                <Route path='/home/thank-you' element={<ThankYou/>}/>
              </Route>
          </Route>
          
          <Route element={<AdminRoutes/>}>
              <Route path='/admin' element={<AdminPanel/>}>
                <Route path={'/admin'} element={<AddProduct/>}/>
                <Route path='/admin/product/add' element={<AddProduct/>}/>
                <Route path='/admin/product/edit' element={<EditProduct/>}/>
                <Route path="/admin/product/remove" element={<RemoveProduct />}/>

              </Route>
          </Route>

          <Route element={<GuestRoutes/>}>
            <Route path='/' element={<GuestPanel/>}>
              <Route path={"/"} element={<GetListOfProducts/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/product/:id' element={<GetProductGuest/>}/>
            </Route>
          </Route>
          
          <Route path="*" element={<NotFound />}/>
        

          <Route path='/logout' element={<Logout/>}/> 

        </Routes>
    </Router>
  );
}

export default App;

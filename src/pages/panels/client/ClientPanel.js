import UserNavbar from '../../navigation/UserNavbar'
import GetProduct from '../../product/GetProduct';
import GetListOfProducts from '../../product/GetListOfProducts';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';

function ClientPanel() {
  
    return (
      <div className='d-flex flex-column min-vh-100'>
      <UserNavbar />
      <Outlet />
      <Footer/>
      </div>
    );
  }

  export default ClientPanel;
  
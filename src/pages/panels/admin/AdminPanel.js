import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';
import AdminNavbar from '../../navigation/AdminNavbar'


function AdminPanel() {  
  return (
    <div className='d-flex flex-column min-vh-100'>
      <AdminNavbar />
      <Outlet/>
      <Footer/>
    </div>
  );
}
export default AdminPanel;

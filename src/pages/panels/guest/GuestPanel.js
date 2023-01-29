import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import GuestNavbar from "../../navigation/GuestNavbar";
import GetListOfProducts from "../../product/GetListOfProducts";

function GuestPanel() {
  return (
    <div className='d-flex flex-column min-vh-100'>
        <GuestNavbar/>
        <Outlet/>
        <Footer/>
    </div>
  );
}
export default GuestPanel;

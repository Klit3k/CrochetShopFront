
import { Github } from 'react-bootstrap-icons';
function Footer() {
  
    return (
        <footer className="container d-flex py-3 my-10 border-top navbar flex-bottom mt-auto ">
        <div className="mx-auto">
            <div className=" d-flex justify-content-center">
                <span className="mb-3 mb-md-0 text-muted">© WAT <a href="https://github.com/Klit3k"><button className='btn btn-sm mb-1 text-muted'><Github size={19}/></button></a>
                </span>
                
            </div>
        </div>
{/*     
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
        </ul> */}
      </footer>
    );
  }

  export default Footer;
  
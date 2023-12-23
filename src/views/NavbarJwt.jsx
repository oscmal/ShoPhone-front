import { Navbar } from 'react-bootstrap';
import NavbarLogo from '../components/NavbarLogo';
import NavbarButtons from '../components/NavbarButtons';
import NavbarButtonsAdmin from '../components/NavbarButtonsAdmin';
import NavbarTitle from '../components/NavbarTitle';
import Context from '../context/Context';
import { useContext } from 'react';

export default function NavbarComponent() {

  const { session } = useContext(Context);
  
    return (
      <Navbar bg="black" variant="dark">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <NavbarLogo />
          </div>
          <div className="d-box align-items-center">
            <NavbarTitle />
            {!session  ? <NavbarButtons /> : <NavbarButtonsAdmin />}
          </div>
        </div>
      </Navbar>
    );
  }
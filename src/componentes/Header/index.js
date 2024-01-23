import './Header.css';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/logo/Group.png';

function Header() {
  return (
    <nav className="nav">
      <ul>
        <img src={logoimg} alt="logo" />
      </ul>
    </nav>
  );
}

export default Header;

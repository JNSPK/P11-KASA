import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <img
        className='logo'
        src={require('../img/LOGO.png')}
        alt='Logo Kasa'></img>
      <nav className='navbar'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Accueil
        </NavLink>
        <NavLink
          to='/a-propos'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          À Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

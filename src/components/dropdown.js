import { useState } from 'react';
import '../styles/dropdown.css';
import arrow from '../img/dropdown-arrow.png';
function Dropdown(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='dropdown'>
      <div className='dropdown-button' onClick={() => setOpen(!open)}>
        <h3 className='dropdown-title'>{props.title}</h3>
        <img
          src={arrow}
          className={`dropdown-arrow ${open ? 'clicked' : 'unclicked'}`}
          alt='dropdown-arrow'></img>
      </div>
      <section className={`dropdown-contenu ${open ? 'active' : 'inactive'}`}>
        {props.txt}
      </section>
    </div>
  );
}

export default Dropdown;

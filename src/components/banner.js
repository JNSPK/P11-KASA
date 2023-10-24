import '../styles/banner.css';
import { useLocation } from 'react-router-dom';

function Banner(props) {
  const location = useLocation();
  const isAccueil = location.pathname === '/';
  return (
    <div className='banner'>
      <img src={props.src} alt='photo_paysage'></img>
      {isAccueil && (
        <h1 className='slogan'>
          Chez vous,
          <br className='mobile-break' />
          partout et ailleurs
        </h1>
      )}
    </div>
  );
}

export default Banner;

import Banner from '../components/banner';
import '../styles/accueil.css';
import img from '../img/banner1.jpg';

function Accueil() {
  return (
    <div className='container-app'>
      <Banner src={img} txt='Chez vous, partout et ailleurs' />
      <p>Hello React 😁👌</p>
    </div>
  );
}

export default Accueil;
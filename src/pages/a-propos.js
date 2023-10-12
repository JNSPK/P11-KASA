import Banner from '../components/banner';
import '../styles/accueil.css';
import img from '../img/banner2.jpg';

function APropos() {
  return (
    <div className='container-app'>
      <Banner src={img} txt='' />
      <p>Hello React 😁👌</p>
    </div>
  );
}

export default APropos;

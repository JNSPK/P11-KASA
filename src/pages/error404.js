import '../styles/404.css';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='container'>
      <h1 className='title'>404</h1>
      <p className='infos'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;

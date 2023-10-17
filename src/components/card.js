import { Link } from 'react-router-dom';
import '../styles/card.css';

const Card = ({ logements }) => {
  // Utilisation des données passées en props pour afficher les cartes
  return (
    // Composant Link pour créer un lien vers la page de détails du logement
    <Link to={`/logement/${logements.id}`} className='card-link'>
      <div className='card'>
        <img src={logements.cover} alt='descriptive' />
        <h2 className='card-title'>{logements.title}</h2>
      </div>
    </Link>
  );
};

export default Card;

import '../styles/card.css';
const Card = ({ logements }) => {
  // Utilisez les données passées en tant que props pour afficher les cartes
  return (
    <div className='card'>
      <img src={logements.cover} alt='descriptive'></img>
      <h2 className='card-title'>{logements.title}</h2>
    </div>
  );
};

export default Card;

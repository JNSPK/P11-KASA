import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/details-logement.css';

const DetailsLogement = () => {
  const { id } = useParams(); // Obtention de l'ID du logement depuis l'URL
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Effectuez une requête API ou utilisez vos données locales pour obtenir les détails du logement avec l'ID
    // Mettez à jour l'état avec les données du logement

    fetch(`/logements.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Retourne la promesse contenant les données JSON
      })
      .then((data) => {
        const logementData = data.find((logement) => logement.id === id);
        if (logementData) {
          setLogement(logementData);
        } else {
          console.error('Logement not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching logement data:', error);
      });
  }, [id]);

  if (!logement) {
    return <div>Chargement des détails du logement...</div>;
  }

  return (
    <div className='container-app'>
      <img src={logement.cover} alt='aperçu'></img>
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
    </div>
  );
};

export default DetailsLogement;

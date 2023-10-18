import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/details-logement.css';
import Carousel from '../components/carousel';

const DetailsLogement = () => {
  const { id } = useParams(); // Obtention de l'ID du logement depuis l'URL
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const logementData = data.find((logement) => logement.id === id);
        console.log(logementData);
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
  console.log(logement);
  return (
    <div className='container-app'>
      <Carousel data={logement} />

      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
    </div>
  );
};

export default DetailsLogement;

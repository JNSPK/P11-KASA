import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/details-logement.css';
import Carousel from '../components/carousel';
import Dropdown from '../components/dropdown';
import Note from '../components/note';

const DetailsLogement = () => {
  const { id } = useParams(); // Obtention de l'ID du logement depuis l'URL
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/logements.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const logementData = data.find((logement) => logement.id === id);
        if (logementData) {
          setLogement(logementData);
        } else {
          console.error('Logement not found');
          // Redirection vers la page 404 si l'ID du logement n'existe pas
          navigate('/error');
        }
      })
      .catch((error) => {
        console.error('Error fetching logement data:', error);
      });
  }, [id, navigate]);

  if (!logement) {
    return <div>Chargement des détails du logement...</div>;
  }
  return (
    <div className='container-app'>
      <Carousel data={logement} />
      <section className='details-container'>
        <section className='details-container-infos'>
          <section className='localisation-tags'>
            <section className='titre-localisation'>
              <h2 className='titre-detail'>{logement.title}</h2>
              <p className='localisation'>{logement.location}</p>
            </section>
            <article className='tags-container'>
              {logement.tags.map((tag) => (
                <li key={tag} className='tags'>
                  {tag}
                </li>
              ))}
            </article>
          </section>
          <section className='loueur-note'>
            {' '}
            <section className='loueur'>
              <p className='loueur-nom'>{logement.host.name}</p>
              <img
                className='loueur-image'
                src={logement.host.picture}
                alt='host'></img>
            </section>
            <article className='note'>
              <Note score={logement.rating} />
            </article>
          </section>
        </section>
        <section className='dropdowns-container'>
          <Dropdown txt={logement.description} title='Description'></Dropdown>
          <Dropdown
            txt={logement.equipments.map((name) => (
              <li key={name}> {name} </li>
            ))}
            title='Equipements'></Dropdown>
        </section>
      </section>
    </div>
  );
};

export default DetailsLogement;

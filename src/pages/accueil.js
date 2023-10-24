import { useState, useEffect } from 'react';
import Banner from '../components/banner';
import Card from '../components/card';
import '../styles/accueil.css';
import img from '../img/banner1.jpg';

const Accueil = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/logements.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data !== undefined) {
          setLogements(data);
        } else {
          throw new Error('Data from server is undefined.');
        }
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  }, []);

  return (
    logements && (
      <div className='container-app'>
        <Banner src={img} />
        <section className='cards-container'>
          {logements.map((item, index) => (
            <Card key={index} logements={item} />
          ))}
        </section>
      </div>
    )
  );
};

export default Accueil;

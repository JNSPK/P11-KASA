import { useState, useEffect } from 'react';
import Banner from '../components/banner';
import Card from '../components/card';
import '../styles/accueil.css';
import img from '../img/banner1.jpg';

const Accueil = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch(`/logements.json`)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
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
    <div className='container-app'>
      <Banner src={img} txt='Chez vous, partout et ailleurs' />
      <section className='cards-container'>
        {logements.map((item, index) => (
          <Card key={index} logements={item} />
        ))}
      </section>
    </div>
  );
};

export default Accueil;

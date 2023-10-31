import Banner from '../components/banner';
import '../styles/a-propos.css';
import img from '../img/banner2.jpg';
import Dropdown from '../components/dropdown';

const dropdownData = [
  {
    title: 'Fiabilité',
    txt: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    txt: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    title: 'Service',
    txt: 'Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres',
  },
  {
    title: 'Sécurité',
    txt: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function APropos() {
  return (
    <div className='container-app'>
      <Banner src={img} />
      {dropdownData.map((item, index) => (
        <Dropdown key={index} txt={item.txt} title={item.title} />
      ))}
    </div>
  );
}

export default APropos;

import '../styles/banner.css';
function Banner(props) {
  return (
    <div className='banner'>
      <img src={props.src} alt='photo_paysage'></img>
      <p className='slogan'>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;

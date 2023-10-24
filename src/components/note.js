import activeStar from '../img/star-active.png';
import inactiveStar from '../img/star-inactive.png';

export default function Note({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='rate-comp'>
      {stars.map((rate) =>
        score >= rate ? (
          <img
            key={rate.toString()}
            className='star'
            src={activeStar}
            alt='rating star'
          />
        ) : (
          //affichage des étoiles de score, pleine ou vide selon le score passé en props
          <img
            key={rate.toString()}
            className='star'
            src={inactiveStar}
            alt='rating star'
          />
        )
      )}
    </div>
  );
}

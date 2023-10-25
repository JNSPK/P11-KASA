import activeStar from '../img/star-active.png';
import inactiveStar from '../img/star-inactive.png';

export default function Note({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='rate-comp'>
      {stars.map((rate) => (
        <img
          key={rate}
          className='star'
          src={score >= rate ? activeStar : inactiveStar}
          alt='notation'
        />
      ))}
    </div>
  );
}

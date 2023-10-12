import '../styles/footer.css';
function Footer() {
  return (
    <div className='footer'>
      <img src={require('../img/LOGOfooter.png')} alt='Logo Kasa'></img>
      <p className='footerInfos'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;

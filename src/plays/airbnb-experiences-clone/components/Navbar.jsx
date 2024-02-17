import Logo from '../assets/images/airbnb-logo.png';

export default function Navbar() {
  return (
    <nav className="airbnb-nav">
      <img className="airbnb-nav--logo" src={Logo} />
    </nav>
  );
}

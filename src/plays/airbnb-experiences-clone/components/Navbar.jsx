import Logo from '../assets/images/airbnb-logo.png';

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={Logo} />
    </nav>
  );
}

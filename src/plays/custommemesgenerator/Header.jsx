import logo from './troll-face.png';

export default function Header() {
  return (
    <div className="cmg-header">
      <img alt="logo" className="cmg-header-troll-logo" src={logo} />
      <p className="cmg-header-title">
        <b>Meme Generator</b>
      </p>
      <p className="cmg-header-text">React App</p>
    </div>
  );
}

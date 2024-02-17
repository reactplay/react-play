import HeroImage from '../assets/images/photo-grid.png';

export default function Hero() {
  return (
    <section className="airbnb-hero">
      <img className="hero--photo" src={HeroImage} />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
}

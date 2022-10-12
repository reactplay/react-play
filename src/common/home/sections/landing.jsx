import Banner from "./banner";
import { ReactComponent as Flower } from "images/icon-flower.svg";
import "./landing.css";

export default function SectionLanding() {
  return (
    <section className="app-home-body">
      <div className="home-bg-graphics">
        <Flower className="home-bg-graphics-sm" />
        <Flower className="home-bg-graphics-rg" />
        <Flower className="home-bg-graphics-lg" />
      </div>
      <div className="app-home-body-content">
        <Banner />
      </div>
    </section>
  );
}

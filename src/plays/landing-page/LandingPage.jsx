import FAQs from "./FAQs"
import Footer from "./Footer"
import Hero from "./Hero"
import Testimonial from "./Testimonial"
import Features from "./Features"
import "./sass/style.scss"

export default () => {
    return (
        <div>
            <Hero />
	        <Features />
            <Testimonial />
            <FAQs />
            <Footer />
        </div>
    )
}

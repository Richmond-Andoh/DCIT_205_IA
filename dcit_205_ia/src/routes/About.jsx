import './About.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    const style = {
        "margin-top": "30rem"
    }
   return (
    <div>
        <div>
            <Navbar />
        </div>
        <h1>About Page</h1>
            <div className="container">
                <div className="carousel">
                    <div className="carousel__face"><span>This is something</span></div>
                    <div className="carousel__face"><span>Very special</span></div>
                    <div className="carousel__face"><span>Special is the key</span></div>
                    <div className="carousel__face"><span>For you</span></div>
                    <div className="carousel__face"><span>Just give it</span></div>
                    <div className="carousel__face"><span>A try</span></div>
                    <div className="carousel__face"><span>And see</span></div>
                    <div className="carousel__face"><span>How IT Works</span></div>
                    <div className="carousel__face"><span>Woow</span></div>
                </div>
        </div>

        <div style={style}>
            <Footer />
        </div>
    </div>
   )
}


export default About;
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './Home.css'

const Home = () => {
    return(
        <div>
            <Navbar />
            <div className="container-fluid">
               <section>
                    <div className="container hero-section">
                    <h1>HOME PAGE</h1>
                    </div>
               </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
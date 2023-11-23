import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './Home.css'
import robot from '../images/robot.jpeg'
import research from '../images/research.jpg'
import home from '../images/home.jpg';
import project from '../images/project.jpg'
import { useState, useEffect } from "react";


const Home = () => {
    
    const[count, setCount] = useState(1);
    
    useEffect(() => {
        // Increment to 70000 when the page is loaded
        const initialCounter = setInterval(() => {
        setCount((prevCount) => {
            if (prevCount < 7000) {
            return prevCount + 1;
            } else {
            clearInterval(initialCounter); // Stop the counter when it reaches 70000
            return prevCount;
            }
        });
        }, 100);

        // Increment every second using setInterval
        const intervalCounter = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        }, 10);

        // Clean up the interval when the component is unmounted
        return () => {
        clearInterval(initialCounter);
        clearInterval(intervalCounter);
        };
    }, []);


    const style = {
        "margin-top": "30rem"
    }

    // const hero = {
    //     // "width": "100%",
    //     "height": "40%",
    // }
    return(
        <div>
            <Navbar />
            <div className="container-fluid hero">
                {/* <div className="hero-image">
                    <img src={home} style={hero} alt="hero image" />
                </div> */}
            </div>
            <div className="container">
                    <div className="carousel">
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                        <div className="carousel__face"></div>
                    </div>
            </div>

            <section style={style} className="mission container">
                    <div className="">
                        <h1>
                        Our mission is to educate ethical, entrepreneurial leaders in Africa;
                        </h1>
                        <p>
                          to instill in pupils the critical thinking abilities, care for others, and fortitude required to reshape the continent.
                        </p>
                    </div>
                    {/* <div className="container">
                         <div className="row">
                            <div className="col">
                                <img src="" alt="" />
                            </div>
                            <div className="col"></div>
                         </div>
                    </div> */}
                </section>
                <section className="statistics">
                    <div className="container-fluid ">
                        <div className="row alumni">
                            <div className="col">
                                <h1>
                                    {count}
                                </h1>
                                <span>STUDENT AND ALUMNI</span>
                            </div>
                            <div className="col">
                                <h1>50%</h1>
                                <p>ON SCHOLARSHIP</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="gateway">
                    <div className="gateway-title container-fluid">
                        <h1>A Gateway to Opportunity & Innovation</h1>
                        <p>
                            The University of Ghana Computer Science Department fosters a diverse 
                            range of research possibilities as well as a distinguished faculty. 
                            Discoveries that have a global impact emerge from the different viewpoints a
                            nd life experiences of our community of students, teachers, and staff.
                        </p>
                    </div>
                    <div className="gateway-cards">
                        <div className="row gateway-row">
                            <div className="col gateway-col">
                                <div className="card">
                                    <img src={research} alt="" />
                                    <div className="card-content">
                                        <h1>Research</h1>
                                        <p>
                                            The Computer Science Department is a center for research and education, 
                                            exploring new frontiers in AI, robotics, scientific computing, and other fields.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col gateway-col">
                                <div className="card">
                                    <img src={research} alt="" />
                                    <div className="card-content">
                                        <h1>Research</h1>
                                        <p>
                                            The Computer Science Department is a center for research and education, 
                                            exploring new frontiers in AI, robotics, scientific computing, and other fields.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col gateway-col">
                                <div className="card">
                                    <img src={robot} alt="" />
                                    <div className="card-content">
                                        <h1>Research</h1>
                                        <p>
                                            The Computer Science Department is a center for research and education, 
                                            exploring new frontiers in AI, robotics, scientific computing, and other fields.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section3 container">
                    <hr />
                    <div className="container-fluid">
                        <h1>Taking Down Barriers to Excellence: Our Equity and Inclusion Culture
                        </h1>
                        <p>
                            veryone deserves a say in the development of new technology and the molding of innovation.
                            UG CS is fostering a future in science that is inclusive of all cultures and backgrounds.
                        </p>
                    </div>
                    <div>
                        <img src={project} alt="" />
                    </div>
                </section>


                <section className="section4">
                    <hr />
                    <div className="stories">
                        <h1>
                            Stories $ Voices
                        </h1>
                        <p>
                           Meet some of the students, faculty, and alumni who create the University of Ghana Computer Science community.
                        </p>
                    </div>
                    <div>
                        <section class="articles">
                            <article>
                                <div class="article-wrapper">
                                <figure>
                                    <img src="https://picsum.photos/id/1011/800/450" alt="" />
                                </figure>
                                <div class="article-body">
                                    <h2>
                                        "You could summarize my work by saying I want to give machine learning models more humility."

                                    </h2>
                                    <p>
                                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                    </p>
                                    <a href="#" class="read-more">
                                    Read more <span class="sr-only">about this is some title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    </a>
                                </div>
                                </div>
                            </article>
                            <article>

                                <div class="article-wrapper">
                                <figure>
                                    <img src="https://picsum.photos/id/1005/800/450" alt="" />
                                </figure>
                                <div class="article-body">
                                    <h2>
                                        "In Iran, where I grew up, there are many female engineers, and I never really doubted my ability to follow this path."
                                    </h2>
                                    <p>
                                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                    </p>
                                    <a href="#" class="read-more">
                                    Read more <span class="sr-only">about this is some title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    </a>
                                </div>
                                </div>
                            </article>
                            <article>

                                <div class="article-wrapper">
                                <figure>
                                    <img src="https://picsum.photos/id/103/800/450" alt="" />
                                </figure>
                                <div class="article-body">
                                    <h2>
                                        "I want to be a role model for the next generation of women, Latinos, and Filipinos in STEM."
                                    </h2>
                                    <p>
                                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                    </p>
                                    <a href="#" class="read-more">
                                    Read more <span class="sr-only">about this is some title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                    </a>
                                </div>
                                </div>
                            </article>
                        </section>
                    </div>

                    
                </section>
            
            <div style={style}>
                 <Footer />
            </div>   
        </div>
    )
}

export default Home;
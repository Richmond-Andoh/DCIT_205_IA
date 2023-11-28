import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './Home.css'
import robot from '../images/robot.jpeg'
import research from '../images/research.jpg'
import home from '../images/home.jpg';
import project from '../images/project.jpg'
import { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
      };

    const [count, setCount] = useState(0);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          // Increment the count by 1
          setCount((prevCount) => {
            const newCount = prevCount + 1;
    
            // Clear the interval when the count reaches 7000
            if (newCount >= 7000) {
              clearInterval(intervalId);
            }
    
            return newCount;
          });
        }, 10); // Adjust the interval based on your preference
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []); 


      useEffect(() => {
        const intervalId = setInterval(() => {
          // Increment the count by 1
          setPercent((prevCount) => {
            const newCount = prevCount + 1;
    
            // Clear the interval when the count reaches 7000
            if (newCount >= 70) {
              clearInterval(intervalId);
            }
    
            return newCount;
          });
        }, 1); // Adjust the interval based on your preference
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []); 

    const style = {
        "margin-top": "4rem"
    }

    // const hero = {
    //     // "width": "100%",
    //     "height": "40%",
    // }
    return(
        <div>
            <div>
                <Navbar />
            </div>
            
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://dcs.ug.edu.gh/img/about-img2.jpeg" alt="Event 1" />
                    </div>
                    <div>
                        <img src="https://i0.wp.com/raphsark.com/wp-content/uploads/2022/06/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-219663775.jpg?fit=800%2C532&ssl=1" alt="Event 2" />
                    </div>
                    <div>
                        <img src="https://i0.wp.com/raphsark.com/wp-content/uploads/2022/08/15FBBD0A-E7BC-457E-B1B7-F3221F93FD73.jpeg" alt="Event 3" />
                    </div>
                    <div>
                        <img src="https://dcs.ug.edu.gh/img/index-poster.jpg" alt="Event 4" />
                    </div>
                    <div>
                        <img src="https://media.licdn.com/dms/image/C4E12AQEqcF0l1JXFcw/article-cover_image-shrink_720_1280/0/1634628737732?e=2147483647&v=beta&t=jTI5Iqku-TkRHZEdMe_-Ts7sb0o7ykQu8KjUE2p-C9Y" alt="Event 5" />
                    </div>
                    <div>
                        <img src="https://images.yen.com.gh/images/3o3bpd1omvrl1os97.jpg?imwidth=900" alt="Event 6" />
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mLGBkq_NaCaID6z-B1CXNIr-77Ji4xj8T81MoHDNCISbk9Ul7JdJLJZi_sBEuw-95bQ&usqp=CAU" alt="Event 7" />
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/media/EBZ6b6xXUAIjz9_.jpg" alt="Event 8" />
                    </div>
                    <div>
                        <img src="https://dcs.ug.edu.gh/img/coursedetail.jpeg" alt="Event 9" />
                    </div>
                </Slider>
           </div>
           <div className="welcome-title">
              <h1>WELCOME TO THE DEPARTMENT OF COMPUTER SCIENCE</h1>
           </div>
            
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
                                <h1>
                                    {percent} %
                                </h1>
                                <p>ON SCHOLARSHIP</p>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="gateway container">
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
                                        <p className="gateway-link">
                                            <a href="">More About CS Research</a>
                                            <i class="bi bi-arrow-right"></i>
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
                                        <h1>Our Faculty</h1>
                                        <p>
                                            Stanford CS faculty members strive to solve the world's most 
                                            pressing problems, working in conjunction with other leaders 
                                            across multiple fields. 
                                        </p>
                                        <p className="gateway-link">
                                            <a href="">Explore Faculty by Areas of Research</a>
                                            <i class="bi bi-arrow-right"></i>
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
                            Everyone deserves a say in the development of new technology and the molding of innovation.
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
                                    <img src="https://edwardasare.com/wp-content/uploads/2022/02/F8CC4099-216B-4FE9-8E82-A38A8DD73977-scaled.jpeg" alt="" />
                                </figure>
                                <div class="article-body">
                                    <h2>
                                        "You could summarize my work by saying I want to give machine learning models more humility."

                                    </h2>
                                    
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbK-IoCr6jDVQymQhcHgbDVtZexn7sQ84piIxfY3Q98p4Hd8gMGySKhPXWs5Kvqv1KzQ&usqp=CAU" alt="" />
                                </figure>
                                <div class="article-body">
                                    <h2>
                                        "In Ponu, where I grew up, there are many Male engineers, and I never really doubted my ability to follow this path."
                                    </h2>
                                    
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
                                    <img src="data:image/jpeg;base64,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" alt="" />
                                </figure>
                                <div class="article-body">
                                    <h2>
                                        "I want to be a role model for the next generation of women, Latinos, and Filipinos in STEM."
                                    </h2>
                                    
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
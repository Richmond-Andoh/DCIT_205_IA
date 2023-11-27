import './Event.css'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Event = () => {
    return(
        <div>
            <div>
              <Navbar />
            </div>
            <div class="event-session">
               <h1>NEWS $ EVENTS</h1>
            </div>


            <div className="container lectures">
                <h1>
                    DEPARTMENT LECTURES
                </h1>
                <div className="lectures-row">
                    <div className="column">
                        <p>
                            <a href="/event">Distinguished Lectures 2022-2023</a>
                        </p>
                        <p>
                            <a href="/event">Distinguished Lectures 2023-2024</a>
                        </p>
                        <p>
                            <a href="/event">Distinguished Lectures 2021-2022</a>
                        </p>
                        <p>
                            <a href="/event">Distinguished Lectures 2019-2020</a>
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            <a href="/event">Distinguished Lectures 2020-2021</a>
                        </p>
                        <p>
                            <a href="/event">Distinguished Lectures 2018-2019</a>
                        </p>
                        <p>
                            <a href="/event">Distinguished Lectures 2017-2018</a>
                        </p>
                        <p>
                            <a href="/event">Distinguished Lectures 2016-2017</a>
                        </p>
                    </div>
                </div>
            </div>
            

            <div className='container event-starter'>
                <h1>PAST EVENTS</h1>
                <div className="star-icon">
                    <span><i class="fa fa-star" aria-hidden="true"></i></span>
                </div>
                <div className="container-events">
                    <section className="event">
                            <img src="https://dcs.ug.edu.gh/img/gallery/shortcourse17.08.2021.jpeg" alt="Event 1" />
                    </section>

                    <section className="event">
                        <img src="https://dcs.ug.edu.gh/img/Cyber%20Security.jpg" alt="Event 2" />
                        
                    </section>
                    <section className="event">
                        <img src="https://dcs.ug.edu.gh/img/event3.jpeg" alt="Event 2" />
                        
                    </section>
                </div>
            </div>


            <div className="event-btn">
                
                    <a href="/event">SEE ALL EVENTS                     
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
               
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Event;
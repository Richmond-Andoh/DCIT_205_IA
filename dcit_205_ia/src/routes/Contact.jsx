import './Contact.css';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MapContainer from '../components/MapContainer';

const Contact = () => {
    

    return(
        <div>
            <div>
                <Navbar />
            </div>
            
            <div className="container-fluid mission-container">
                <div className="mission">
                    <h2>
                        Our Mission
                    </h2>
                    <p>
                        Every single person who understands the impact of <br /> Technology 
                        should be an advocate and <br /> strive for a better, more inclusive Tech for all.
                    </p>
                </div>

                 {/* fORM CONTAINER */}
                <div className="container contact-container">
                    <div className="row contact-row">
                        <div className="col-md-12">
                            <h3>SEND US A MESSAGE</h3>
                            <form action="">
                                <div className="form-group">
                                    <div className="name-lable">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div className="email-lable">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="subject-lable">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" name="subject" id="subject" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="message-lable">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="submit-lable">
                                        <button type="submit">
                                        <i class="bi bi-send-check-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12 contact-info">
                            
                            <div className="contact-info-container">
                                <h3>
                                    CONTACT INFORMATION
                                </h3>
                                <p>
                                    <span>
                                      <i class="bi bi-telephone-forward"></i>
                                      +233 501 382 03
                                    </span>
                                </p>
                                <p>
                                    <span>
                                      <i class="bi bi-telephone-forward"></i>
                                      +233 559 145 698
                                    </span>
                                </p>
                              
                                <p>
                                    <span>
                                      <i class="bi bi-envelope-at-fill"></i>
                                      dcs@ug.edu.gh
                                    </span>
                                </p>

                                <div className="col social-media">
                                   <span>
                                       <i class="bi bi-facebook"></i>
                                   </span>
                                   <span>
                                     <i class="bi bi-instagram"></i>
                                   </span> 
                                   <span>
                                      <i class="bi bi-linkedin"></i>
                                   </span>  
                                   <span>
                                     <i class="bi bi-twitter-x"></i>
                                    </span>                               
                                </div>
                              
                            </div>
                            <div className="map">
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='visit container'>
                <h2>
                    COME VISIT US AT OUR CAMPUS
                </h2>
                <span>
                  <i class="bi bi-pin-map-fill"></i>
                </span>
            </div>
            <div className='map-container'>
                <MapContainer />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;


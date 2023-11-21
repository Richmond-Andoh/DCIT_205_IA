import './Footer.css';

const Footer = () => {
    return(
        <footer className="bg-dark text-center text-white">
            <div class="p-4 footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>
                <div className="footer_row1">
                    <div className="col">
                        <h2>Academics</h2>
                         <hr />
                       <ul>
                            <li>Undergraduate Courses</li>
                            <li>Graduate Courses(MPhil Computer Science)</li>
                            <li>Graduate Courses(MSc Computer Science)</li>
                            <li>Graduate Courses(PhD)</li>
                            <li>Academic Calendar</li>
                            <li>Level 200 & 300 Timetable</li>
                            <li>Placements For Level 200 Students</li>
                            <li>Student Complaint Form</li>
                       </ul>
                    </div>
                    <div className="col">
                        <h2>Admissions</h2> <hr />
                        <ul>
                            <li>Undergraduate</li>
                            <li>Graduate</li>
                            <li>Entry Requirements</li>
                            <li>International Students</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Research</h2> <hr />
                        <ul>
                            <li>Research at DCS</li>
                            <li>Research Impact</li>
                            <li>Libraries</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>About Us</h2> <hr />
                        <ul>
                            <li>Introducing DCS</li>
                            <li>Head of Department's office</li>
                            <li>Faculty</li>
                            <li>Events</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer_row2">
                    <div className="col">
                        <h2>Newsletter</h2>
                        <p>Subscribe to our newsletter for the latest updates from us.</p>
                        <form action="">
                            <div class="input">
                                <input type="text" class="button" id="email" name="email" placeholder="NAME@EXAMPLE.COM"/>
                                <input type="submit" class="button" id="submit" value="SIGN UP"/>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                              <span>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                              </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Location</h2>
                            <ul>
                                <li>
                                    <span>
                                    University Of Ghana, Legon Campus
                                    </span>
                                </li>
                                <li>
                                    <span>Opposite Mathematics Department</span>
                                </li>
                            </ul>
                    
                    </div>
                </div>
                <div className="footer_row3">
                    <div className="col">
                        <p>
                          Copyright ©2023 All rights reserved
                        </p>
                    </div>
                    <div className="col media">
                        <a href="#">
                            <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
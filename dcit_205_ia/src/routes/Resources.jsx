import './Resources.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Resources = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div class="resources-session">
               <h1>EXPLORE SOME OF OUR RESOURCES</h1>
            </div>
            <div class="container resources-container">
               <div>
                  <h1>Undergraduate Resources</h1>
                  <p>
                    Bsc-Computer Science <span><i class="bi bi-caret-down"></i></span>
                  </p>
                  <hr />
                  <p>
                    Five Years Curriculum at a glance <span><i class="bi bi-caret-down"></i></span>
                  </p>
                    <hr />
                  <p>
                      Computer Science Minor <span><i class="bi bi-caret-down"></i></span>
                  </p>
                  <hr />
                  <p>
                    Double Majors Involving Computer Science <span><i class="bi bi-caret-down"></i></span>
                  </p>
                  <hr />
                  <p>
                    Honors Program <span><i class="bi bi-caret-down"></i></span>
                  </p>
                  <hr />
                  <p>
                    CS Undergraduate Handbook <span><i class="bi bi-caret-down"></i></span>
                  </p>
                  <hr />
                  
               </div>

               <div>
                <h1>Graduate Reaources</h1>
                <p>
                    MS-Computer Science <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
                <p>
                    Curriculum <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
                <p>
                    Research Areas <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
                <p>
                    Capstone Projects and Theses <span><i class="bi bi-caret-down"></i></span>
                </p>

                <hr />
                <p>
                  Graduate Handbook  <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
                <p>
                    Advanced Certificate in Big data Analytics <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
               
               </div>

               <div>
                <h1>Study Abroad Information</h1>
                <p>
                    Study Abroad Programs-Overview <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
                <p>
                    How To Apply <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
                <p>
                    Travel Advice <span><i class="bi bi-caret-down"></i></span>
                </p>
                <hr />
                <p>
                    Useful Links <span><i class="bi bi-caret-down"></i></span>
                </p>
               </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Resources;
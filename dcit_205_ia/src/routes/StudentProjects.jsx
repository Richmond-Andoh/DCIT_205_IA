import './StudentProjects.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MapContainer from '../components/MapContainer'
const StudentProjects = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>

            <div class="project-session">
               <h1>EXPLORE SOME UNIQUES PROJECTS BY OUR STUDENTS</h1>
            </div>

            {/* <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_Jdl3SBF1lU?si=MsqSDNDlHXv2HoG2" title='video player' allow="autoplay; " allowfullscreen></iframe>     
            </div> */}

            <div className="container project-container">

                <div className="project-card">
                    <img className="project-screenshot" src="https://www.bcswebsiteservices.com/images/stories/marketing-img/facebook_business_page.jpg" alt="Web Development Project" />
                    <div className="project-details">
                        <h2 className="project-title">Linkedin Clone</h2>
                        <p className="project-description">A dynamic website showcasing innovative web development techniques and technologies.</p>
                        <div className="profile-section">
                        <p>Project by: John Doe</p>
                        <p>Student ID: ABC123</p>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img className="project-screenshot" src="https://markovate.com/wp-content/uploads/2022/09/How-Travel-Apps-Are-Changing-the-Tourism-Industry_@2x.png" alt="Mobile App Development Project" />
                    <div className="project-details">
                        <h2 className="project-title">Travel Mobile App</h2>
                        <p className="project-description">An interactive mobile application designed for seamless user experience and functionality.</p>
                        <div className="profile-section">
                        <p>Project by: Jane Smith</p>
                        <p>Student ID: XYZ456</p>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img className="project-screenshot" src="https://cdn.dribbble.com/users/5031392/screenshots/16681060/dribble_shot___marusya___20.09___denis_d._anastasia_sergienko_4x.png" alt="AI Project" />
                    <div className="project-details">
                        <h2 className="project-title">AI Chat-Bot App</h2>
                        <p className="project-description">An artificial intelligence project leveraging machine learning algorithms for intelligent decision-making.</p>
                        <div className="profile-section">
                        <p>Project by: Mark Johnson</p>
                        <p>Student ID: DEF789</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container video-session">
                <h1>Student Awesome Project on IPMC</h1>
                <div className="video-background">
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src="./video/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            
            {/* <div className='video-container'>
                <iframe src="https://www.youtube.com/embed/kuUjiAdXTLA?si=gZSTi58xmOv6ZVTm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;"></iframe>
            </div> */}
            <div className="map-container">
                <MapContainer />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default StudentProjects;
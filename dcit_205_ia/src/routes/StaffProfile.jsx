import './StaffProfile.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MapContainer from '../components/MapContainer'
const StaffProfile = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>

            <div class="staff-session">
               <h1>Staff Profiles - Computer Science Department</h1>
            </div>

            <div className='profile container'>
                <h1>Meet Some Of Our Distinguisged Lectures Of The Department</h1>
                <p>
                Explore the expertise of our computer science faculty, encompassing 
                diverse specializations and contributions. Our team includes professors, 
                assistant professors, and lecturers,
                each bringing valuable insights and knowledge to the department
               </p>
            </div>
            <div class="container staff-container">

                <div className="staff-card">
                    <img className="staff-avatar" src="https://media.licdn.com/dms/image/C4D03AQEmoU6UToCpsg/profile-displayphoto-shrink_800_800/0/1614953081331?e=1706745600&v=beta&t=iXwy3OKOiv3R7Hfadfnpts-mOQASc_3EwhLFw8acMzE" alt="Staff 1" />
                    <div className="staff-details">
                        <h2 className="staff-name">Dwumfour Abdullai Abdul-Aziz</h2>
                        <p className="staff-position">
                          Lecturer at University of Ghana || CEO, ZIZI FOUNDATION GHANA
                        </p>
                        <p>Contact Info</p>
                    </div>
                </div>

                <div className="staff-card">
                    <img className="staff-avatar" src="https://media.licdn.com/dms/image/D4D03AQFM2tsz2Reprg/profile-displayphoto-shrink_800_800/0/1696783518621?e=1706745600&v=beta&t=kIXT1U_h8Riw0_-4rVHWDuk6LglDljQtgBdStlpQ23M" alt="Staff 2" />
                    <div className="staff-details">
                        <h2 className="staff-name">Mark Atta Mensah, - MPhil. BSc.</h2>
                        <p className="staff-position">Computer Science Lecturer at University of Ghana</p>
                        <p>Contact info</p>
                    </div>
                </div>

                <div className="staff-card">
                    <img className="staff-avatar" src="staff3.jpg" alt="Staff 3" />
                    <div className="staff-details">
                        <h2 className="staff-name">Mark Johnson</h2>
                        <p className="staff-position">Lecturer</p>
                    </div>
                </div>

                <div className="staff-card">
                    <img className="staff-avatar" src="staff3.jpg" alt="Staff 3" />
                    <div className="staff-details">
                        <h2 className="staff-name">Mark Johnson</h2>
                        <p className="staff-position">Lecturer</p>
                    </div>
                </div>


            </div>

            {/* <div class="container staff-container">

                <div className="staff-card">
                    <img className="staff-avatar" src="staff1.jpg" alt="Staff 1" />
                    <div className="staff-details">
                        <h2 className="staff-name">John Doe</h2>
                        <p className="staff-position">Professor of Computer Science</p>
                    </div>
                </div>

                <div className="staff-card">
                    <img className="staff-avatar" src="staff2.jpg" alt="Staff 2" />
                    <div className="staff-details">
                        <h2 className="staff-name">Jane Smith</h2>
                        <p className="staff-position">Assistant Professor</p>
                    </div>
                </div>

                <div className="staff-card">
                    <img className="staff-avatar" src="staff3.jpg" alt="Staff 3" />
                    <div className="staff-details">
                        <h2 className="staff-name">Mark Johnson</h2>
                        <p className="staff-position">Lecturer</p>
                    </div>
                </div>


              </div> */}

            <div className='map-container'>
                <MapContainer />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default StaffProfile;
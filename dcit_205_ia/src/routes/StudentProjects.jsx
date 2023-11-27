import './StudentProjects.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
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
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default StudentProjects;
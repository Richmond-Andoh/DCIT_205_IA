import './About.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import home from '../images/home.jpg';
import Rich from '../images/Rich.jpg'
import Organization from '../images/Organization.jpg';
import Distance from '../images/Distance.jpg'
const About = () => {
  
   return (
    <div>
        <div>
            <Navbar />
        </div>            
        <div className="container-fluid">
            <div className="img section1">
                {/* <img src={Rich} alt="richmond image" /> */}
            </div>
        </div>

        <div className='container welcome-text'>
                <h1>
                   Welcome to the Computer Science Department
                </h1>
                <p>
                    The Computer Science Department of the University of Ghana aspires to
                     produce leaders who will shape the future. We believe that CS graduates 
                     must be innovative, out-of-the-box thinkers with a social responsibility mission.
                      They must develop multidisciplinary abilities 
                    as well as the capacity and motivation to collaborate with others. 
                    The range of courses available in the department and the skills acquired
                     by students enable them to find employment in many diverse fields of the 
                     economy and prepare our graduates for the computing industry, working in 
                     a project team (or research and development team), and to enable the 
                     graduate to bring specialist skills to that team. The course also provides
                      the platform for further study or research through exposure to established
                       and emerging technologies and methods, and to active fields of research 
                       in Computer Science.
                </p>
        </div>
        

        <div class="container1">
                <div class="column">
                    <div>
                        <h1>Our Organization</h1>
                        <p>
                        The University of Ghana is one of the Africa's most preeminent
                         public universities. Our impact on individuals, our region and 
                         the world is profound. whether we are launching young people into 
                         a boundless future or confronting the grand challenges of our time 
                         {/* through dauntless research. UG educates more than 38,000students annually, 
                         with approximately 2.64% being computer science students. We turn ideas into 
                         impact and transform the world around us. 
                        For more about our impact, visit our news site, UG News. */}
                        </p>
                    </div>
                    <div className='aut-fill-img'>
                        <img src={Organization} alt="" />
                    </div>
                </div>

                <div class="column">
                    <div className='aut-fill-img'>
                        <img src={home} alt="" />
                    </div>
                    <div>
                        <h1>Our Commuity</h1>
                        <p>
                            If you are inspired by a big challenge, you've come to the right place! 
                            The computer science community at the univrersity of Ghana encourages it's 
                            people to be vibrant and brave
                            in taking on new challenges that push boundries beyond imagination.
                        </p>
                    </div>
                </div>
        </div>
        
        <div class="container2">
                <div class="column">
                    <div>
                        <img src={Distance} alt="" />
                    </div>
                </div>
                <div className="column">
                    <h1>Distance Learning</h1>
                    <p>
                        Experience a UG-CDCD classroom from wherever you are.
                        Take advantage of real-time lectures and personal interaction
                        with professors through a suite of online delivery options, 
                        customizing your degree to fit your schedule. Our online classroom 
                        maintains the same level of academic rigor, while providing students
                        with more ways of learning.
                    </p>
                </div>
        </div>

        <div className="container3">
            <div className="column">
                <div>
                    <img src="https://www.cs.stanford.edu/sites/g/files/sbiybj28076/files/styles/cta_1x_596x397/public/media/image/gallery/img_9801.jpg?h=5c991ea4&itok=owF2MSxj" alt="" />
                </div>
            </div>
            <div className="column">
                <div>
                    <img src="https://www.cs.stanford.edu/sites/g/files/sbiybj28076/files/styles/cta_1x_596x397/public/media/image/gallery/about-montage_sail_4_0.jpg?h=5b2ed817&itok=oQvpIKmS" alt="" />
                </div>
            </div>
            <div className="column">
                <div>
                    <img src="https://www.cs.stanford.edu/sites/g/files/sbiybj28076/files/styles/cta_1x_596x397/public/media/image/gallery/about-montage_student1_1.jpg?h=5b2ed817&itok=RaytXErF" alt="" />
                </div>
            </div>
            <div className="column">
                <div>
                    <img src="https://www.cs.stanford.edu/sites/g/files/sbiybj28076/files/styles/cta_1x_596x397/public/media/image/gallery/aboutmontage_robotic-arm_0.jpg?h=06ac0d8c&itok=3yIEqVOW" alt="" />
                </div>
            </div>
            <div className="column">
                <div>
                    <img src="https://img.climateinteractive.org/2018/05/DSC_5466.jpg" alt="" />
                </div>
            </div><div className="column">
                <div>
                    <img src="https://new.ug.edu.gh/fpe/sites/default/files/2023-01/1P0A1002_0.jpg" alt="" />
                </div>
            </div>

            <div className="column">
                <div>
                    <img src="https://i0.wp.com/raphsark.com/wp-content/uploads/2022/06/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-219663775.jpg?resize=800%2C532&ssl=1" alt="" />
                </div>
            </div><div className="column">
                <div>
                    <img src="https://new.ug.edu.gh/fpe/sites/default/files/2022-10/st_0.png" alt="" />
                </div>
            </div><div className="column">
                <div>
                    <img src="https://blog.getrooms.co/wp-content/uploads/2021/01/k-159-chim-5156.jpg" alt="" />
                </div>
            </div>
        </div>
        
        
       
       <div>
        <Footer />
       </div>
    </div>
   )
}


export default About;
import './Catalog.css';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MapContainer from '../components/MapContainer'


const Catalog = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            
    <div className="hero-session">
      <h1>CATALOG</h1>
    </div>
    {/* <div class="container introduction">
      <div class="program-overview">
        <div class="degree-programs">
          <div class="phd-programs all-programs">
            <div class="program-title">
              <h2>PHD PROGRAMS</h2>
            </div>
            <div class="program-content">
              <p></p>
              <a href=""> Read More </a>
            </div>
          </div>
          <div class="undergrad-programs all-programs">
            <div class="program-title">
              <h2>UNDERGRADUATE PROGRAMS</h2>
            </div>
            <div class="program-content">
              <p></p>
              <a href=""> READ MORE </a>
            </div>
          </div>
          <div class="msc-program all-programs">
            <div class="program-title">
              <h2>MSC PROGRAM</h2>
            </div>
            <div class="program-content">
              <p></p>
              <a href=""> READ MORE </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div className="container-fluid">
      <h1 className='short-courses-title'>Join Our Short Courses</h1>

      <div className="container short-courses">
        <div className="card">
          <img
            src="https://dcs.ug.edu.gh/img/short_courses_images/Web%20Dev.png"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div className="content">
            <h4><b> Introduction to Web Development </b></h4>
            <p>
              Web Development involves creating and maintaining 
              websites and web applications, covering aspects such
              as front-end design, back-end functionality.
            </p>
            <p className="read-more">
              Read More
            </p>
            <button type="submit">
                ENROLL NOW!
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.ivyzen.net/wp-content/uploads/2016/05/IT-1080x675.jpg"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div className="content">
            <h4><b>Machine Learning</b></h4>
            <p>
              Machine Learning is a subset of AI that 
              empowers computers to learn from data, identify 
              patterns, and make decisions without explicit programming, 
            </p>
            <p className="read-more">Read More</p>
            <button type="submit">
                ENROLL NOW!
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://dcs.ug.edu.gh/img/mobile.png"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div className="content">
            <h4><b>Introduction To Mobile Application Developmentg</b></h4>
            <p>
              Mobile App Development is the process of designing and
              creating applications for mobile devices.
            </p>
            <p className="read-more">Read More</p>
            <button type="submit">
                ENROLL NOW!
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyN_7ViMFnePbbkyT0kb88nIDULt0FSGTeIiluwQOzTarxVqOymooZMG1l3WYleajjIeM&usqp=CAU"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div className="content">
            <h4><b>AI(Artificial Intelligence)</b></h4>
            <p>
              AI is a branch of computer science focused on creating systems 
              that can perform tasks that typically require human intelligence.
            </p>
            <p className="read-more">Read More</p>

            <button type="submit">
                ENROLL NOW!
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Course listing */}

    <div className="container-fluid explore">
      {/* (previous sections) */}

      <section className="opportunities" id="research-opportunities">
        <div>
          <h2>Research Opportunities</h2>
          <p>
            Explore cutting-edge research initiatives and contribute to
            advancements in computer science.
          </p>
        </div>

        <div>
          <h3>Research Labs</h3>
          <p>
            Our department houses state-of-the-art research labs dedicated to
            various computer science domains. Students have the opportunity to
            engage in hands-on research projects led by experienced faculty
            members.
          </p>
        </div>

        <div>
          <h3>Ongoing Projects</h3>
          <p>
            Discover the exciting ongoing projects within the department,
            ranging from artificial intelligence and machine learning to
            cybersecurity and data science. Students can actively participate in
            these projects and gain valuable research experience.
          </p>
        </div>
      </section>
      <hr />
      <section className="internship" id="internship-and-job-placement">
        <div>
          <h2>Internship & Job Placement</h2>
          <p>
            Prepare for a successful career in computer science with our
            internship and job placement support.
          </p>
        </div>

        <div>
          <h3>Internship Programs</h3>
          <p>
            We collaborate with industry leaders to provide internship
            opportunities for students. Gain real-world experience, apply your
            classroom knowledge, and build valuable connections in the tech
            industry.
          </p>
        </div>

        <div>
          <h3>Job Placement Support</h3>
          <p>
            Our dedicated career services team assists students in securing
            rewarding positions after graduation. Benefit from resume workshops,
            mock interviews, and networking events to enhance your job search
            skills.
          </p>
        </div>

        {/* <!-- <h3>Alumni Success Stories</h3>
        <p>
          Explore the success stories of our alumni who have gone on to excel in
          various roles within the tech sector. Our graduates have landed
          positions in leading technology companies, startups, and research
          institutions.
        </p> --> */}
      </section>

      {/* <!-- ... (remaining sections) ... --> */}
    </div>

    <div className="container-fluid">
      <h1 className='short-courses-title'>Explore Most Of Our Programmes</h1>

      <div class="container programs">
        <div class="card">
          <div className="program-title">
            <h3>UNDERGRADUATE PROGRAMmes</h3>
          </div>
          <div class="content">
            <p>
              Open the door to sought-after technology careers with a world class bachelor of sicence in computer sicence
            </p>
            <div className="btn">
              <button type="submit">
                Apply Now!
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="program-title">
            <h3>MPHIL $ MSC. PROGRAMMES</h3>
          </div>
          
          <div class="content">
            <p>
              Embrace world class graduate education with unique blend of cutting-edge research and industry experience
            </p>
            <div className="btn">
              <button type="submit">
                Apply Now!
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="program-title">
            <h3>PHD PROGRAMMES</h3>
          </div>          
          <div class="content">
            <p>
              Our PHD's lead the effort extend the boundaries knowledge through quality and industry relevant research.
            </p>
            <div className="btn">
              <button type="submit">
                Apply Now!
              </button>
            </div>
          </div>
        </div>
        
      </div>
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

export default Catalog;
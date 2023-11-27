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
            
    <div class="hero-session">
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

    <div class="container-fluid">
      <h1 className='short-courses-title'>Join Our Short Courses</h1>

      <div class="container short-courses">
        <div class="card">
          <img
            src="https://dcs.ug.edu.gh/img/short_courses_images/Web%20Dev.png"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div class="content">
            <h4><b> Introduction to Web Development </b></h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit
              animi voluptates quo dicta deleniti quos voluptas, praesentium
              omnis. Officia.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="https://www.ivyzen.net/wp-content/uploads/2016/05/IT-1080x675.jpg"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div class="content">
            <h4><b> </b></h4>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit
              animi voluptates quo dicta deleniti quos voluptas, praesentium
              omnis. Officia.
            </p> */}
          </div>
        </div>
        <div class="card">
          <img
            src="https://dcs.ug.edu.gh/img/mobile.png"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div class="content">
            <h4><b>Introduction To Mobile Application Developmentg</b></h4>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit
              animi voluptates quo dicta deleniti quos voluptas, praesentium
              omnis. Officia.
            </p> */}
          </div>
        </div>
        <div class="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyN_7ViMFnePbbkyT0kb88nIDULt0FSGTeIiluwQOzTarxVqOymooZMG1l3WYleajjIeM&usqp=CAU"
            alt="Avatar"
            style={{width: "100%"}}
          />
          <div class="content">
            <h4><b> Artificial Intelligence $ Machine Learnin</b></h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit
              animi voluptates quo dicta deleniti quos voluptas, praesentium
              omnis. Officia.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Course listing */}

    <div class="container-fluid explore">
      {/* (previous sections) */}

      <section class="opportunities" id="research-opportunities">
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
      <section class="internship" id="internship-and-job-placement">
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

    <div class="container-fluid">
      <h1 className='short-courses-title'>Explore Most Of Our Programmes</h1>

      <div class="container programs">
        <div class="card">
          <div className="program-title">
            <h3>UNDERGRADUATE PROGRAMmes</h3>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit
              animi voluptates quo dicta deleniti quos voluptas, praesentium
              omnis. Officia.
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
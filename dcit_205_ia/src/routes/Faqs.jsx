import './Faqs.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Faqs = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="faqs-session">
               <h1>Frequently Asked Questions</h1>
            </div>
            <div class="container faqs-container">

                <div class="faq-item">
                    <p class="question">Q: What programs does the Computer Science Department offer?</p>
                    <p>A: We offer a range of undergraduate and graduate programs, including Bachelor's and Master's degrees in Computer Science.</p>
                </div>
                <hr />
                <div class="faq-item">
                    <p class="question">Q: How can I apply for admission to the Computer Science Department?</p>
                    <p>A: To apply for admission, please visit our Admissions page for detailed information on the application process and requirements.</p>
                </div>
                <hr/>
                <div class="faq-item">
                    <p class="question">Q: Are there opportunities for research within the department?</p>
                    <p>A: Yes, we encourage students to participate in research projects. You can explore ongoing research initiatives and connect with faculty members.</p>
                </div>
                 <hr/>
                <div class="faq-item">
                    <p class="question">Q: What resources are available for students in the Computer Science Department?</p>
                    <p>A: We provide access to state-of-the-art labs, a comprehensive library, and various online resources to support your academic journey.</p>
                </div>
                <hr/>
                <div class="faq-item">
                    <p class="question">Q: How can I get involved in extracurricular activities related to computer science?</p>
                    <p>A: We offer various clubs, coding competitions, and hackathons. Check our Events page for upcoming activities and opportunities to get involved.</p>
                </div>
                <hr/>
                <div class="faq-item">
                    <p class="question">Q: Can I switch my major to Computer Science?</p>
                    <p>A: Yes, you can inquire about changing your major through the academic advising office. They will guide you through the process and provide necessary information.</p>
                </div>
                <hr/>
                <div class="faq-item">
                    <p class="question">Q: What career services does the department offer?</p>
                    <p>A: We provide career counseling, job placement assistance, and organize industry networking events to help students connect with potential employers.</p>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}


export default Faqs
import './Resources.css'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Resources = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div class="container resourses-container">
                <ul class="resource-list">
                <li class="resource-item">
                    <img src="websites.jpg" alt="Websites" class="resource-image" />
                    <p class="resource-title">Websites</p>
                    <ul>
                    <li><a href="https://www.example1.com" target="_blank">Example Website 1</a></li>
                    <li><a href="https://www.example2.com" target="_blank">Example Website 2</a></li>
                    </ul>
                </li>

                <li class="resource-item">
                    <img src="books.jpg" alt="Books" class="resource-image" />
                    <p class="resource-title">Books</p>
                    <ul>
                    <li>Introduction to Computer Science</li>
                    <li>Data Structures and Algorithms</li>
                    </ul>
                </li>

                <li class="resource-item">
                    <img src="tutorials.jpg" alt="Online Tutorials" class="resource-image" />
                    <p class="resource-title">Online Tutorials</p>
                    <ul>
                    <li><a href="https://www.exampletutorial1.com" target="_blank">Example Tutorial 1</a></li>
                    <li><a href="https://www.exampletutorial2.com" target="_blank">Example Tutorial 2</a></li>
                    </ul>
                </li>
                </ul>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Resources;
import GalleryCarousel from '../components/CarouselGallery'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Gallery.css'
import MapContainer from '../components/MapContainer'

const Gallery = () => {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className='gallery-container'>
                <div className="gallery">
                        <h1>
                            Our Gallery
                        </h1>
                        <p>
                            Immerse yourself in a visual journey 
                            showcasing exciting events, collaborative projects, and the dynamic spirit 
                            of our community. Witness the snapshots that define our commitment 
                            to excellence and innovation in the ever-evolving world of computer science.
                        </p>
                </div>
            </div>

            <div>
              <GalleryCarousel />
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

export default Gallery;
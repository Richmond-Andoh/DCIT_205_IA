import './CarouselGallery.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GalleryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div>
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="https://dcs.ug.edu.gh/img/gallery/PHOTO-2019-03-04-14-42-37.jpg" alt="Event 1" />
                </div>
                <div>
                    <img src="https://www.tis.edu.gh/wp-content/uploads/2020/02/cs-5.jpg" alt="Event 2" />
                </div>
                <div>
                    <img src="https://dcs.ug.edu.gh/img/about-img2.jpeg" alt="Event 3" />
                </div>
                <div>
                    <img src="https://i0.wp.com/raphsark.com/wp-content/uploads/2022/06/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-219663775.jpg?fit=800%2C532&ssl=1" alt="Event 3" />
                </div>
                <div>
                    <img src="https://i0.wp.com/raphsark.com/wp-content/uploads/2022/08/EAF34359-B2C0-447B-A0AC-5FDD360BD13F.jpeg" alt="Event 3" />
                </div>
                <div>
                    <img src="https://i0.wp.com/raphsark.com/wp-content/uploads/2022/08/15FBBD0A-E7BC-457E-B1B7-F3221F93FD73.jpeg" alt="Event 3" />
                </div>
                {/* Add more carousel items as needed */}
            </Slider>
        </div>
    </div>
  );
};

export default GalleryCarousel;
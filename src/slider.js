import React, { useState, useEffect } from 'react';
import './slider.css';
// import vs from "./image/v.jpg";
const images = [
    'https://img.freepik.com/free-psd/scooter-banner-template_23-2149395521.jpg?w=1380&t=st=1692789074~exp=1692789674~hmac=8d219ddef56c7c8ee394080d56e54bd00b9ca12da47a39dbdfea7ed19bb64151',
    'https://img.freepik.com/free-vector/modern-travel-landing-page_23-2148362242.jpg?w=996&t=st=1692789396~exp=1692789996~hmac=106e84afbef6e0e82efa9f97dc94dc849b3f0de8c2dfaf2b2d9e01ce72e03dad',
    'https://img.freepik.com/free-psd/bicycle-banner-template-theme_23-2148636120.jpg?w=1380&t=st=1692789198~exp=1692789798~hmac=819f24932573fb15dab3758ee45675ee9d52e1cc6e22eb3348c9082daedc4022',
    'https://img.freepik.com/free-psd/monochrome-horizontal-banner-template-camping-with-couple_23-2148831516.jpg?w=1380&t=st=1692789108~exp=1692789708~hmac=679ec6872e600f9de5473be3d3a6a2d63b01e46635d253159a35e1d564ce0f83',
    // vs, this is showing downloaded image
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => setCurrentIndex(index);
    const goToNextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    const goToPrevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 4500);
        return () => clearInterval(interval);
    }, [goToNextSlide, goToPrevSlide]);

    return (<div>
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
                    </div>
                ))}
            </div>
            <button className="slider__btn slider__btn--left" onClick={goToPrevSlide} onHov>&larr;</button>
            <button className="slider__btn slider__btn--right " onClick={goToNextSlide}>&rarr;</button>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? 'dot active' : 'dot'}
                        onClick={() => goToSlide(index)}
                    />
                ))}</div>
        </div>
        
    </div>
    );
};

export default Slider;

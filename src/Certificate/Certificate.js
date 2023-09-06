import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CertificateSlider.css'
import ExampleCarouselImage from './SliderImages';
import R from '../images/R.jpg'
import HS from '../images/HS.jpg'
import JS from '../images/JS.jpg'

function Sliders() {
  const [index, setIndex] = useState(0);

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index here
      const nextIndex = (index + 1) % 3; 
      handleSelect(nextIndex);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [index]);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" imageUrl={HS} />
        <Carousel.Caption>
          <h3 className='colr'>First slide label</h3>
          <p className='colr'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" imageUrl='https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg' />
        <Carousel.Caption>
          <h3 className='colr'>Second slide label</h3>
          <p className='colr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" imageUrl='https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;
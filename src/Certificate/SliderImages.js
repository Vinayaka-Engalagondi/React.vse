import React from 'react';

function ExampleCarouselImage({ text, imageUrl }) {
  return (
    <img src={imageUrl} alt={text} className="carousel-image" style={{width:'80%', height:'100VH', margin:'auto', }}/>
  );
}

export default ExampleCarouselImage;

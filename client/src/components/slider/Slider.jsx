import './slider.scss'
import React, { useState } from 'react';

export default function Slider({images}) {
  const [imageIndex, setImageIndex] = useState(null);
  const [bigImage, setBigImage] = useState(images[0]);
  const [smallImages, setSmallImages] = useState(images.slice(1));

  const handleSmallImageClick = (clickedImage, index) => {
    const newSmallImages = [...smallImages];
    newSmallImages[index] = bigImage;
    // Ustaw nowy duży obraz
    setBigImage(clickedImage);
    // Aktualizuj stan małych obrazów
    setSmallImages(newSmallImages);
  }

  const handleArrowClick = (direction) => {
    let newIndex = imageIndex;
    if (direction === 'left') {
      newIndex = (imageIndex === 0) ? images.length - 1 : imageIndex - 1;
    } else if (direction === 'right') {
      newIndex = (imageIndex === images.length - 1) ? 0 : imageIndex + 1;
    }

    setImageIndex(newIndex);
    setBigImage(images[newIndex]);
  };

  return (
    <div className='slider'>
        {imageIndex !== null && (
          <div className="fullSlider">
            <div className="arrow" onClick={() => handleArrowClick('left')}>
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div className="imgContainer">
              <img src={bigImage} alt="" />
            </div>
            <div className="arrow" onClick={() => handleArrowClick('right')}>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="close" onClick={()=>setImageIndex(null)} >
              <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        )}
        


        <div className="bigImage">
            <img src={bigImage} alt="" onClick={()=>setImageIndex(0)}/>
        </div>
        <div className="smallImages">
            {smallImages.map((image, index)=> (
                <img 
                  src={image} 
                  alt='' 
                  key={index} 
                  onClick={() => handleSmallImageClick(image, index)}
                  style={{ cursor: 'pointer'}}
                  />
            ))}
        </div>
    </div>
  )
}

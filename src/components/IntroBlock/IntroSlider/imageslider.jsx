import React, { useState, useEffect } from "react";
import styled from "styled-components";


const IndicatorWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 25px;
  bottom: 15px;
  @media (max-width: 768px) {
    bottom: 5px; // Ubah posisi indikator untuk layar kecil
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #18216d;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
  @media (max-width: 768px) {
    width: 8px; // Ubah ukuran dot untuk layar kecil
    height: 8px;
    margin: 3px;
  }
`;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 82.5vh;
  width: 100vw;
  @media (max-width: 768px) {
    height: 30vh; // Ubah tinggi slider untuk layar kecil
    width: 100vw;
  }
`;

const Slide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
  cursor: pointer; /* Tambahkan cursor pointer saat diarahkan ke slide */
  @media (max-width: 768px) {
    flex-shrink: 0;
    width: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  position: relative;
  top: 100%;
  left: 100%;
  transform: translate(-100%, -100%);
`;

const ImageSlider = ({
  images = [],
  children,
  autoSlideInterval = 3000, 
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // console.log("Setting up auto-slider interval");
    const timer = setInterval(() => {
      // console.log("Auto-sliding to the next slide");
      nextSlide();
    }, autoSlideInterval);

    return () => {
      // console.log("Clearing auto-slider interval");
      clearInterval(timer);
    };
  }, [currentSlide]);

  function nextSlide(slideIndex = currentSlide + 1) {
    // console.log("Moving to the next slide");
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  }


  return (
    <Wrapper>
      {images.map((imageInfo, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageInfo.imageUrl})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
              backgroundSize: 'cover',
            }}
            onClick={() => {
              window.open(imageInfo.imageLink, '_blank'); // Buka tautan di tab baru
            }}
          />
      ))}
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default ImageSlider;
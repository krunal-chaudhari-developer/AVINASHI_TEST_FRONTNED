import React, { useState, useEffect } from "react";
import photo1 from "../../assets/photo 1.jpg";
import photo2 from "../../assets/photo 2.jpg";
import photo3 from "../../assets/photo 3.jpg";
import photo4 from "../../assets/photo 4.jpg";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: photo1,
      alt: "Slide 1",
    },
    {
      id: 2,
      image: photo2,
      alt: "Slide 2",
    },
    {
      id: 3,
      image: photo3,
      alt: "Slide 3",
    },
    {
      id: 4,
      image: photo4,
      alt: "Slide 4",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative xl:w-full xl:max-w-5xl xl:h-[35rem] mx-5 xl:mx-auto ">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].alt}
        className="w-full h-full rounded-3xl"
      />
    </div>
  );
};

export default Carousel;

/** @format */
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Left from './../../public/assets/svg/left.svg';
import Right from './../../public/assets/svg/right.svg';

// Define the type for the image prop
interface ImageType {
  src: string;
  width: number;
  height: number;
}

interface LanguagesProps {
  images: ImageType[];
}

const Languages: React.FC<LanguagesProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (): void => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full flex overflow-hidden">
        <div
          className="carousel-container relative flex transition-transform ease-in-out duration-500 h-[700px] max-[1024px]:h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item flex-none w-full transform transition-opacity duration-500 rounded-full ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`Slide ${index}`}
                className="block w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <button
          className="arrow-btn absolute left-0 top-1/2 -translate-y-1/2 px-[10px] py-[14px] max-[767px]:w-[35px] max-[767px]:px-[8px] max-[767px]:py-[10px]
          max-[425px]:w-[30px] max-[425px]:px-[6px] max-[425px]:py-[8px]"
          onClick={goToPrevious}
        >
          <Image
            src={Left.src}
            alt="left"
            width={Left.width}
            height={Left.height}
          />
        </button>
        <button
          className="arrow-btn absolute right-0 top-1/2 -translate-y-1/2 px-[10px] py-[14px] max-[767px]:w-[35px] max-[767px]:px-[8px] max-[767px]:py-[10px]  max-[425px]:w-[30px] max-[425px]:px-[6px] max-[425px]:py-[8px]"
          onClick={goToNext}
        >
          <Image
            src={Right.src}
            alt="Right"
            width={Right.width}
            height={Right.height}
          />
        </button>
      </div>
    </div>
  );
};

export default Languages;

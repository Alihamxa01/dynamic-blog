'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Images = [
  { src: '/slider1.jpeg', alt: 'Slide 1' },
  { src: '/slider2.jpeg', alt: 'Slide 2' },
  { src: '/slider3.webp', alt: 'Slide 3' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col  justify-start mt-24 ">
      <div className="relative w-80 h-48 overflow-hidden rounded-lg  shadow-md shadow-purple-400 bg-purple-400">
        {Images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {Images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </main>






  );
}

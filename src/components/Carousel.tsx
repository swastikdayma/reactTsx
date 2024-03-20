import React, { useState } from 'react';

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://images.ctfassets.net/hrltx12pl8hq/2ppk3Ug2z6oFMZY5z8WXnx/75af41f13939954c93de0ff8c1972612/shutterstock_1922207966.jpg?fit=fill&w=120&h=120&fm=webp',
    'https://images.ctfassets.net/hrltx12pl8hq/1qoVFqqABKxtFRMkUh0v6l/6a9bbdc723ac373f4e44400de87997b2/shutterstock_1734177410__1_.jpg?fit=fill&w=120&h=120&fm=webp',
    'https://images.ctfassets.net/hrltx12pl8hq/2ppk3Ug2z6oFMZY5z8WXnx/75af41f13939954c93de0ff8c1972612/shutterstock_1922207966.jpg?fit=fill&w=120&h=120&fm=webp'
  ];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full h-80"
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white text-3xl px-3 py-2 focus:outline-none"
      >
       <i className="bi bi-chevron-double-left"></i>
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white text-3xl px-3 py-2 focus:outline-none"
      >
        <i className="bi bi-chevron-double-right"></i>
      </button>
    </div>
  );
};

export default Carousel;

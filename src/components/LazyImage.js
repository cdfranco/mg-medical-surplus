import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  );

  useEffect(() => {
    // Start loading the image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${
        isLoading
          ? 'animate-pulse bg-gray-200'
          : 'transition-opacity duration-300'
      }`}
      loading='lazy'
    />
  );
};

export default LazyImage;

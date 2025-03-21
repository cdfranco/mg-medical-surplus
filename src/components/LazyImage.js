import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  );

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    // Start loading the image
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };

    imageToLoad.onerror = () => {
      setHasError(true);
      setIsLoading(false);
      setCurrentSrc(
        'https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found'
      );
      console.error(`Failed to load image: ${src}`);
    };

    return () => {
      // Clean up
      imageToLoad.onload = null;
      imageToLoad.onerror = null;
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${
        isLoading
          ? 'animate-pulse bg-gray-200'
          : hasError
          ? 'opacity-80 border border-red-300'
          : 'transition-opacity duration-300'
      }`}
      loading='lazy'
    />
  );
};

export default LazyImage;

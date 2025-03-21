import React from 'react';

const SimpleImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          'https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found';
      }}
    />
  );
};

export default SimpleImage;

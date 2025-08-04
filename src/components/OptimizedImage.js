import React, { useState, useEffect } from 'react';
import images from '../assets/images/images';
import imagesWebP from '../assets/images/images-webp';

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  loading = "lazy",
  fallbackSrc = null,
  ...props 
}) => {
  const [supportsWebP, setSupportsWebP] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Detectar soporte de WebP
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, 1, 1);
      
      const dataURL = canvas.toDataURL('image/webp');
      return dataURL.indexOf('data:image/webp') === 0;
    };

    setSupportsWebP(checkWebPSupport());
  }, []);

  useEffect(() => {
    if (!src) return;

    // Obtener el nombre de la imagen sin extensión
    const getImageName = (imagePath) => {
      if (typeof imagePath === 'string') {
        return imagePath.split('/').pop().split('.')[0];
      }
      return null;
    };

    // Buscar la imagen en el objeto de imágenes
    const findImageKey = (imageObj, targetPath) => {
      for (const [key, value] of Object.entries(imageObj)) {
        if (value === targetPath) {
          return key;
        }
      }
      return null;
    };

    const imageKey = findImageKey(images, src);
    
    if (imageKey && supportsWebP && imagesWebP[imageKey]) {
      // Usar WebP si está disponible y soportado
      setImageSrc(imagesWebP[imageKey]);
    } else {
      // Usar imagen original como fallback
      setImageSrc(src);
    }
  }, [src, supportsWebP]);

  if (!imageSrc) {
    return null;
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      {...props}
    />
  );
};

export default OptimizedImage; 
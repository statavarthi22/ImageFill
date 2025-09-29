import { useState, useEffect } from "react";
import allisonShippingImage from "@assets/image_1759167657222.png";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = allisonShippingImage;
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="fullscreen-container">
      {/* Loading overlay */}
      {!imageLoaded && !imageError && (
        <div className="loading-overlay" data-testid="loading-overlay">
          <div className="text-white text-xl">Loading Allison Shipping...</div>
        </div>
      )}

      {/* Error state */}
      {imageError && (
        <div className="loading-overlay" data-testid="error-overlay">
          <div className="text-white text-xl">Failed to load image. Please refresh the page.</div>
        </div>
      )}

      {/* Main fullscreen image */}
      <img
        src={allisonShippingImage}
        alt="Allison Shipping - International Shipping Services. From Your Door to the World. Family-owned shipping company with cargo ship carrying containers on ocean."
        className={`fullscreen-image ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="eager"
        decoding="async"
        data-testid="main-shipping-image"
      />
    </div>
  );
}

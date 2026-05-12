// pages/GalleryDetails.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { galleryData } from "../data/galleryData";

// Import different gallery layouts
import KitchenGalleryLayout from "../components/gallery/GalleryLayoutKitchen";
import LuxuryGalleryLayout from "../components/gallery/ModularKitchen";
import MinimalGalleryLayout from "../components/gallery/GalleryLayoutMinimal";
import ModernGalleryLayout from "../components/gallery/GalleryLayoutModern";
import ClassicGalleryLayout from "../components/gallery/GalleryLayoutClassic";
import ArtisticGalleryLayout from "../components/gallery/GalleryLayoutArtistic";
import PremiumGalleryLayout from "../components/gallery/GalleryLayoutPremium";
import DefaultGalleryLayout from "../components/gallery/GalleryLayoutDefault";
import ModularKitchen from "../components/gallery/ModularKitchen";

const GalleryDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const gallery = galleryData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${gallery?.title || 'Gallery'} - LD Cucine`;
  }, [slug, gallery]);

  if (!gallery) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl text-white mb-4">Gallery Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-amber-600 text-white px-8 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Select layout based on layoutType
  const renderLayout = () => {
    switch (gallery.layoutType) {
      case "kitchen":
        return <ModularKitchen gallery={gallery} />;
      case "luxury":
        return <LuxuryGalleryLayout gallery={gallery} />;
      case "minimal":
        return <MinimalGalleryLayout gallery={gallery} />;
      case "modern":
        return <ModernGalleryLayout gallery={gallery} />;
      case "classic":
        return <ClassicGalleryLayout gallery={gallery} />;
      case "artistic":
        return <ArtisticGalleryLayout gallery={gallery} />;
      case "premium":
        return <PremiumGalleryLayout gallery={gallery} />;
      default:
        return <DefaultGalleryLayout gallery={gallery} />;
    }
  };

  return <>{renderLayout()}</>;
};

export default GalleryDetails;
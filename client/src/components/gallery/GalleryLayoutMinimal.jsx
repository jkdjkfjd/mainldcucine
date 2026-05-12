// components/gallery/GalleryLayoutMinimal.jsx - Minimal Gallery Design
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const GalleryLayoutMinimal = ({ gallery }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-white min-h-screen pt-20">

        {/* Simple Hero */}
        <div className="py-20 text-center border-b border-gray-100">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-light mb-4">{gallery.title}</h1>
            <div className="w-12 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">{gallery.description}</p>
          </div>
        </div>

        {/* Minimal Grid Gallery */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.gallery.map((image) => (
              <div key={image.id} className="group">
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-medium">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Features */}
        <div className="border-t border-gray-100 py-16">
          <div className="container mx-auto px-6 text-center text-gray-500">
            <p className="text-sm uppercase tracking-wider mb-4">Features</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {gallery.features.map((feature, idx) => (
                <span key={idx} className="text-sm">{feature}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
};

export default GalleryLayoutMinimal;
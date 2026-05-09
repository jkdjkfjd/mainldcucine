// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const categories = [
    { name: 'Architecture', path: '/blog?category=Architecture' },
    { name: 'Interior Design', path: '/blog?category=Interior Design' },
    { name: 'Sustainable Design', path: '/blog?category=Sustainable Design' },
    { name: 'Home Improvement', path: '/blog?category=Home Improvement' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: 'https://youtube.com', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-[#000000] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4">
              LD Cucine
            </h3>
            <p className="text-gray-400 mb-4">
              Creating beautiful and functional spaces that inspire and delight.
              Your trusted partner in architecture and interior design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-amber-400 transition"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-1" />
                <span className="text-gray-400">123 Design Street, Creative District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-400">info@ldcucine.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-amber-400" />
                <span className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-lg font-semibold">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-sm">Get the latest design insights and tips</p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} LD Cucine. All rights reserved. | Designed with ❤️ for your dream home
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
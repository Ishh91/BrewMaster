import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { href: '/', label: 'Home', isRoute: true },
    { href: '#about', label: 'About', isRoute: false },
    { href: '#menu', label: 'Menu', isRoute: false },
    { href: '#products', label: 'Products', isRoute: false },
    { href: '#review', label: 'Reviews', isRoute: false },
    { href: '#contact', label: 'Contact', isRoute: false },
    { href: '/blog', label: 'Blog', isRoute: true },
    { href: '/booking', label: 'Booking', isRoute: true },
  ];

  return (
    <footer className="bg-gray-800 text-center py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2 text-amber-500 mb-8">
          <Coffee className="w-8 h-8" />
          <span className="text-2xl font-bold">BrewMaster</span>
        </Link>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {footerLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 border border-gray-600 text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 rounded-lg text-lg capitalize"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 border border-gray-600 text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 rounded-lg text-lg capitalize"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Copyright */}
        <div className="text-white text-lg font-light">
          Created by <span className="text-amber-500 font-semibold">BrewMaster Team</span> | All rights reserved © 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
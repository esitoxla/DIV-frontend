import React from 'react';
import { FaGoogle, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

        {/* Description + Socials */}
        <div className="flex-1">
          <p className="mb-4 text-sm leading-relaxed max-w-xs">
            Your reliable QR code generator for all your needs. Easily create, customize, and manage QR codes for various purposes.
          </p>
          <ul className="flex gap-4 text-xl">
            <li className='bg-white rounded-full p-2 shadow hover:scale-105 transition'><FaGoogle /></li>
            <li className='bg-white rounded-full p-2 shadow hover:scale-105 transition'><FaTwitter /></li>
            <li className='bg-white rounded-full p-2 shadow hover:scale-105 transition'><FaInstagram /></li>
            <li className='bg-white rounded-full p-2 shadow hover:scale-105 transition'><FaLinkedin /></li>
          </ul>
        </div>

        {/* Protocol */}
        <div className="flex-1">
          <h3 className="font-bold mb-2">Protocol</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex-1">
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Report an Issue</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex-1">
          <h3 className="font-bold mb-2">Social</h3>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Twitter</li>
            <li>Discord</li>
            <li>Github</li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex-1">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookie</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='flex flex-row m-5 '>
        <div className='flex-1/4 flex-col '>
            <p className='text-wrap'>
                Your reliable QR code generator for all your needs. Easily create, customize, and manage QR codes for various purposes.
            </p>
            <div className='socials'>
                <ul className='flex list-none p-2'>
                <li className='p-2'><FaGoogle /></li>
                <li className='p-2'><FaTwitter /></li>
                <li className='p-2'><FaInstagram /></li>
                <li className='p-2'><FaLinkedin /></li>
                </ul>
            </div>
        </div>
        <div className='flex-1/4 text-start pl-5'>
            <h3 className='font-bold'>Protocol</h3>
            <ul>
                <li>Home</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='flex-1/4 text-start'>
            <h3 className='font-bold'>Support</h3>
            <ul>
                <li>Help Center</li>
                <li>Report an Issue</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className='flex-1/4 text-start'>
            <h3 className='font-bold'>Social</h3>
            <ul>
                <li>Help Center</li>
                <li>Twitter</li>
                <li>Discord</li>
                <li>Github</li>
            </ul>
        </div>
        <div className='flex-1/4 text-start'>
            <h3 className='font-bold'>Company</h3>
            <ul>
                <li>Careers</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Cookie</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
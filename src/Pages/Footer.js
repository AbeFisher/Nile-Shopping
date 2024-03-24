import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="social-media">
        <p>Connect with us:</p>
        <div className="sm_icons">
            <FaFacebook size={25} />
            <FaInstagram size={25} />
            <FaTwitter size={25} />
        </div>
      </div>
      <p>&copy; Copyright 2024 | Abraham B. Fisher</p>
    </div>
  )
}

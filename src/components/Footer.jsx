import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-[500px] flex flex-col items-center w-full bg-[#282828]">
      <div className="ml-[6%] h-[20%] gap-[390px] w-[80%] flex justify-around items-center">
        <div>
          <img src="/footer-log.png" height="100px" width="200px" alt="Footer Logo" />
        </div>
        <div className="text-[#FFFFFF] flex flex-col items-center gap-2">
          <button className="border-2 border-[#FFFFFF] h-[40px] text-[12px] flex items-center justify-center w-[200px] bg-[#007BFF] rounded-md">
            Schedule 1-on-1 Call Now
          </button>
          <h4 className="text-[10px]">Speak with our Learning Advisor</h4>
        </div>
      </div>
      <div className="h-[70%] ml-[5%] w-[70%] text-[#FFFFFF] flex bg-inherit">
        <div className="p-4 w-1/4">
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between pr-8">Data Science & AI <span>+</span></li>
            <li className="flex justify-between pr-8">Product Management <span>+</span></li>
            <li className="flex justify-between pr-8">Business Analytics <span>+</span></li>
            <li className="flex justify-between pr-8">Digital Transformation <span>+</span></li>
            <li className="flex justify-between pr-8">Business Management <span>+</span></li>
            <li className="flex justify-between pr-8">Project Management <span>+</span></li>
            <li className="flex justify-between pr-8">Strategy & Leadership <span>+</span></li>
            <li className="flex justify-between pr-8">Senior Management <span>+</span></li>
            <li className="flex justify-between pr-8">Fintech <span>+</span></li>
          </ul>
        </div>
        <div className="w-2/4 px-4 text-[12px]">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li>Email us (For Data Science Queries): admissions@accredian.com</li>
            <li>Email us (For Product Management Queries): pm@accredian.com</li>
            <li>Data Science Admission Helpline: +91 9079653292 (9 AM-7PM)</li>
            <li>Product Management Admission Helpline: +91 9625811095</li>
            <li>Enrolled Student Helpline: +91 7969322507</li>
            <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
          </ul>
          <h3 className="text-lg font-semibold mb-4">Why Accredian</h3>
          <ul>
            <li>High-quality education programs</li>
            <li>Expert instructors</li>
            <li>Comprehensive curriculum</li>
          </ul>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex gap-4">
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4 p-4">
          <h3 className="text-lg font-semibold mb-4">Accredian</h3>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

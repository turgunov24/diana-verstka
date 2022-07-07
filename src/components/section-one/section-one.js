import React from "react";
//assets
import logoImage from "../../assets/images/navbarLogo.png";
import headerImage from "../../assets/images/headerImage.png";
import MySwiper from "../../assets/swiper/swiper";
import "./section-one.css";
//assets
import galleryImageOne from "../../assets/images/gallery-image-1.webp";
import galleryImageTwo from "../../assets/images/gallery-image-2.webp";
import galleryImageThree from "../../assets/images/gallery-image-3.webp";
import galleryImageFour from "../../assets/images/gallery-image-4.webp";
import AppleIcon from '@mui/icons-material/Apple';

function SectionOne() {
  return (
    <div id="section-one" className="py-10 px-14 flex flex-col items-center">
      <nav className="w-full py-3 flex items-center justify-start gap-5">
        <img width={30} height={30} src={logoImage} alt="navbarLogoImage" />
        <h1 className="font-noto text-2xl font-semibold text-indigo-800">
          Capture
        </h1>
      </nav>
      <header className="w-full flex flex-col items-center py-7 gap-7">
        <img src={headerImage} alt="headerImage" />
        <h1 className="text-3xl font-semibold">Hi Diana,</h1>
        <p className="flex-wrap text-center">
          Welcome to the Photography collection provided by capture.
        </p>
      </header>
      <div id="swiper" className="w-full h-[470px] py-5 ">
        <MySwiper />
      </div>
      <h1 className="text-4xl py-5 font-semibold text-center">
        Welcome to Capture
      </h1>
      <p className="text-center flex-wrap">
        Welcome to Capture Digital photography collection.Over the next few days
        we'll send <br /> you a short series of emails to help you get started.
        We look forward to helping you <br /> close the gap between the practice
        and theory
      </p>
      <button className="border-none outline-none rounded-md mt-7 py-3 px-12 bg-black text-white text-xl">
        Get Started
      </button>
      <div className="bg-gray-200 mt-20 w-2/3 h-1"></div>
      <h1 className="py-7 text-2xl font-semibold text-gray-500">
        Get Capture App
      </h1>
      <p className="text-gray-400 text-center flex-wrap">
        Welcome to Capture Digital photography collection.Over the next few days
        we'll send <br /> you a short series of emails to help you get started.
        We look forward to helping you <br /> close the gap between the practice
        and theory
      </p>
      <div
        id="section-one-gallery"
        className="flex justify-between w-full h-[500px] mt-10"
      >
        <div
          id="gallery-one"
          className="w-1/2 flex flex-wrap gap-[2%] justify-center overflow-y-scroll"
        >
          <img src={galleryImageOne} className="w-full rounded-2xl" />
          <img src={galleryImageTwo} className="w-[275px] h-[300px]  rounded-2xl" />
          <img src={galleryImageThree} className="w-[275px] h-[300px] rounded-2xl" />
        </div>
        <div id="gallery-two" className="w-1/2">
          <img src={galleryImageFour} className="w-full h-full rounded-xl" />
        </div>
      </div>
      <div className="bg-gray-200 mt-10 w-2/3 h-1"></div>
      <div className="w-5/6 mt-10 py-9 flex justify-center flex-wrap gap-10">
        <span className="flex items-center gap-2"><AppleIcon /><a href="#" className="text-md mt-1">Apple Store</a></span>
        <span className="flex items-center gap-2"><AppleIcon /><a href="#" className="text-md text-gray-400 mt-1">Google Play</a></span>
      </div>
      <p className="text-gray-400 mt-5 flex-wrap text-center">Capture.inc Warehouse, West India Quay, London E14 4AL</p>
      <p className="text-gray-400  flex-wrap mt-5">Copyright © 2020</p>
    </div>
  );
}

export default SectionOne;

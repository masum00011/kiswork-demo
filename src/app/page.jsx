// import serverContext from 'server-only-context';
'use client';
import Image from "next/image";
import Link from "next/link";
import logo from "../Images/logo.png";
import locationping from '../Images/GLOBAL.gif';
import Imageslider from "@/components/Imageslider";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import ProduckCard from "@/components/ProduckCard";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import ownerbio from '../Images/owner.png';
import bg_owner from '../Images/bgcolor.jpg';
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = () => {
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("toggle");
  };
  return (
    <>
    <div className="top-header  bg-[#021a47] text-white">
    <div class="container mx-auto p-4 flex flex-wrap justify-between ">
      <div className="flex flex-wrap gap-4">
      <p>Gray Iron and SG Iron casting foundry in India</p>
      <p><CallIcon/> +91 8336906400 | +91 9830057740</p>
      <p><MailIcon/>enquiry@kiswok.com</p>
      </div>
        {/* <FacebookIcon/>
        <LinkedInIcon/>
        <YouTubeIcon/>
        <SearchIcon/> */}
      <div className="search-icon">
      <p><MailIcon/>enquiry@kiswok.com</p>
      </div>
      </div>

    </div>
      <div class="container mx-auto py-4  ">
        <Image src={logo} alt="Logo Image" />
      </div>

      <div class="container mx-auto  ">
        <nav>
          <div className="logo m-[auto] w-[10rem]">
            {/* <Image src={'logo'} alt="Logo Image" /> */}
            <p className="text-7xl text-[blue]">
              {" "}
              K <span className="text-[15px] text-[white]">ISWORK</span>
            </p>
          </div>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
          <ul className="nav-links text-white ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">INFRASTRUCTURE</a>
            </li>
            <li>
              <a href="#">QUALITY</a>
            </li>
            <li>
              {/* <button className="login-button" href="#">
          Login
        </button> */}
              <a href="#my_modal_8" className="login-button">
                Login
              </a>
              {/* Put this part before </body> tag */}
              <div className="modal" id="my_modal_8">
                <div className="modal-box text-black px-8">
                  <div className="modal-action">
                    <a href="#" className="">
                      <CloseIcon />
                    </a>
                  </div>
                  <div className="main-content w-[80%] m-[auto]">
                    <div className="avtar-icon">
                      <div className="avatar flex justify-center ">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                          <img
                            src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_kiri_16x9_1098_04_39d940d1.jpeg?region=0%2C60%2C1920%2C960"
                            alt="avtar"
                          />
                        </div>
                      </div>
                      <p className="text-center p-4">Login</p>
                    </div>
                    <div className="input-text">
                      <TextField
                        type="text"
                        variant="filled"
                        fullWidth
                        className="py-4 "
                        placeholder="Enter email "
                        size="small"
                      />
                      <TextField
                        variant="filled"
                        type="password"
                        fullWidth
                        className=" py-4"
                        placeholder="Password email "
                        size="small"
                      />
                    </div>
                      <a href="" className=" normal-case">Forget Password</a>
                    <div className="btn-login w-[70%] m-[auto]">
                      <button className="btn btn-active btn-primary my-8 w-[100%]">
                        sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <Imageslider />

      <div class="container mx-auto py-4  ">
        <div className="global-footprint h-[27rem] flex flex-wrap justify-between m-[auto] my-8">
          <div className="text-content w-[45%] h-[20rem%] m-[auto]">
            <b className="text-[#d6d9df]">About Us</b>
            <div className="bold-text font-bold text-3xl py-4">

            <p >WELCOME TO</p>
            <b>Kiswok Industries</b>
            </div>
            <hr  className="pb-4"/>
            <p>
              Kiswok industries is one of the Gray Iron and SG Iron casting
              foundry based in India since 1957. Kiswok has conferred
              presidential award twice for export excellence. We are one of the
              largest manufacturers and export fully machined and sub assemble
              components of Cast & Ductile Iron casting products.
            </p>
          </div>
          <div className="img-location-img h-[100%]">
            <Image src={locationping} alt="location"/>
          </div>
        </div>

      <div className="card-section ">
        <p className="py-20 font-bold text-3xl text-center">India's Leading Manufacturer of Automotive, Industrial, Railway, Agricultural and Municipal Castings Since 1957.</p>
        <div className="card-content flex flex-wrap gap-4 justify-evenly">
          <ProduckCard/>
          <ProduckCard/>
          <ProduckCard/>
          <ProduckCard/>
          <ProduckCard/>
          <ProduckCard/>
          <ProduckCard/>
        </div>
      </div>

      <div className="video-section flex flex-wrap justify-evenly my-8">
        <div className="video-content w-[45%]">
        <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>
        <div className="text-content w-[45%]">
          <p className="text-2xl pt-8">Kiswok <span className="font-bold"> At A Glance</span> </p>
          <hr className="pb-4" />
          <p><DoneIcon/> <span>Production Capacity 1,08,000 MT Per Annum</span> </p>
          <p><DoneIcon/> <span>An ISO 9001: 2015 & IATF 16949:2016 Company</span> </p>
          <p><DoneIcon/> <span>Bronze Category IRIS Certified Company</span> </p>
          <p><DoneIcon/> <span>NABL Accredited Laboratory both in the field Chemical & Mechanical</span> </p>
          <p><DoneIcon/> <span>Export based in World wide</span> </p>
          <p><DoneIcon/> <span>Globally Customer satisfaction</span> </p>
          <p><DoneIcon/> <span>Time bound delivery and quality consistency</span> </p>
          <p><DoneIcon/> <span>Achieving global customer quality standard with time bound delivery at a competitive price</span> </p>
        </div>
      </div>
      </div>
        <div className="owner-bio " style={{
          backgroundImage: `url(${bg_owner.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
          <div class="container mx-auto py-4 flex flex-wrap justify-evenly ">
          <Image src={ownerbio} width={300} height={300} alt="bio" className="m-[auto]"/>
          <div className="text-bio w-[40%] h-[30%] m-[auto]" >
            <p>IN THE LOVING MEMORY OF...</p>
            <p>Lt. Shri S. S. Kejriwal</p>
            <p className="text-white">You taught us the meaning of perfection and perseverance. You taught us the virtues which guide us through the darkness, help us strive for the best and make us better human beings, every single day.</p>
            <p className="text-white">We promise to embody your values and live up to your legacy for the rest of our days. You will, forever, rest in the core of our hearts.</p>
          </div>
        </div>
        </div>

    </>
  );
}

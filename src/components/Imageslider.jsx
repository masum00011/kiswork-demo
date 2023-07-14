import React from 'react'
import img from '../Images/img2.jpg'
export default function Imageslider() {
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src='https://images.pexels.com/photos/3780477/pexels-photo-3780477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-full h-[45rem] " alt='conver'/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
    <img src={img} className="w-full" alt='conver'/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
    <img src={img} className="w-full" alt='conver'/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
    <img src={img} className="w-full" alt='conver'/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  )
}

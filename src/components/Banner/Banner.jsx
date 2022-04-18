import React from 'react'
import BannerImg from "../..//banner.png"
import "./Banner.css"

function Banner() {
  return (
    <div className='w-3/4 h-96 mt-8 rounded-3xl bg-white shadow-lg shadow-black mx-auto flex flex-col items-center justify-center p-12 sm:max-w-1200 sm:flex-row'>
        <img className='mb-6 w-48 sm:w-80' src={BannerImg} alt="Page Banner" />
        <h1 className='text-lg text-center w-full leading-5 lg:text-3xl lg:leading-10 lg:w-3/5'><span className='block text-2xl text-accentColor lg:text-3xl lg:inline md:mb-3 lg:mb-0'>Belive In Us, </span>We are providing the best class food in our Industry.</h1>
    </div>
  )
}

export default Banner
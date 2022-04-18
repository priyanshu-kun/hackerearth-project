import React from 'react'
import { IconContext } from 'react-icons'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./Card.css"


function Card({ Brand, Variety, Country, _id, Styles, Stars, image, TopTen }) {
  if (Stars == "NaN") {
    Stars = 0
  }
  return (
    <Link to={`/card/${_id}`} className='block w-full h-25rem cursor-pointer overflow-hidden mb-6 rounded-3xl relative bg-secondaryBackgroundColor border-2 border-solid border-white/10 sm:mb-0'>
      <div className='w-full h-48'>

        <img className="block card-image w-full h-full object-cover" src={image} alt='food card image' loading='lazy' />
      </div>
      <div>
        <h2 className='text-base text-center text-accentColor w-4/5 mx-auto leading-5 mt-6 mb-3'>{Variety}</h2>
        <hr className='w-3/4 mx-auto border-white/10' />
        <span className='block text-center mt-3 text-tiny text-white/30'>{Brand}</span>
      </div>
      <div>
        <div className='w-full flex items-center justify-center my-3'>
          <span>
            {
              Stars >= 1
                ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                  <FaStar />
                </IconContext.Provider>
                : Stars >= 0.5
                  ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaStarHalfAlt />
                  </IconContext.Provider>
                  : <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaRegStar />
                  </IconContext.Provider>
            }
          </span>
          <span>
            {
              Stars >= 2
                ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                  <FaStar />
                </IconContext.Provider>
                : Stars >= 1.5
                  ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaStarHalfAlt />
                  </IconContext.Provider>
                  : <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaRegStar />
                  </IconContext.Provider>
            }
          </span>
          <span>
            {
              Stars >= 3
                ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                  <FaStar />
                </IconContext.Provider>
                : Stars >= 2.5
                  ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaStarHalfAlt />
                  </IconContext.Provider>
                  : <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaRegStar />
                  </IconContext.Provider>
            }
          </span>
          <span>
            {
              Stars >= 4
                ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                  <FaStar />
                </IconContext.Provider>
                : Stars >= 3.5
                  ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaStarHalfAlt />
                  </IconContext.Provider>
                  : <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaRegStar />
                  </IconContext.Provider>
            }
          </span>
          <span>
            {
              Stars >= 5
                ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                  <FaStar />
                </IconContext.Provider>
                : Stars >= 4.5
                  ? <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaStarHalfAlt />
                  </IconContext.Provider>
                  : <IconContext.Provider value={{ className: "text-accentTextColor" }}>
                    <FaRegStar />
                  </IconContext.Provider>
            }
          </span>

        </div>
        <div className='mb-3 mt-6 flex items-center justify-around'>
          <Link className='block text-tiny text-white/30 underline' to={'/' + Country}>{Country}</Link>
          <span className='block text-tiny text-white/30'>{Styles}</span>
          <span className='block text-tiny text-white/30'>{TopTen}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
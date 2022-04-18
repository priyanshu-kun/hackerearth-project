import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Navbar from '../../components/Navbar/Navbar'
import { IconContext } from 'react-icons'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

function CardPage() {

  const apiData = useSelector(state => state.saveDataReducer.data)
  const { id } = useParams()
  const [gettingInfo, setGettingInfo] = useState({});
  console.log(apiData)

  useEffect(() => {
    const filteredData = apiData.find(d => d._id === id);
    console.log("filterd: ", filteredData)
    setGettingInfo(filteredData)
  }, [])


  return (
    <>
      <Navbar />
      <div className='flex mt-8 items-center justify-center flex-col'>
        <img src={gettingInfo.image} className="rounded-3xl w-60 sm:w-96" alt="card" />
        <div className='mt-12 w-full'>
          <div className='w-3/4 mx-auto flex justify-center items-center flex-col'>
            <div className='flex mx-auto items-center justify-center w-full'>
              <span>
                {
                  gettingInfo.Stars >= 1
                    ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                      <FaStar />
                    </IconContext.Provider>
                    : gettingInfo.Stars >= 0.5
                      ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaStarHalfAlt />
                      </IconContext.Provider>
                      : <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaRegStar />
                      </IconContext.Provider>
                }
              </span>
              <span>
                {
                  gettingInfo.Stars >= 2
                    ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                      <FaStar />
                    </IconContext.Provider>
                    : gettingInfo.Stars = 1.5
                      ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaStarHalfAlt />
                      </IconContext.Provider>
                      : <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaRegStar />
                      </IconContext.Provider>
                }
              </span>
              <span>
                {
                  gettingInfo.Stars >= 3
                    ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                      <FaStar />
                    </IconContext.Provider>
                    : gettingInfo.Stars >= 2.5
                      ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaStarHalfAlt />
                      </IconContext.Provider>
                      : <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaRegStar />
                      </IconContext.Provider>
                }
              </span>
              <span>
                {
                  gettingInfo.Stars >= 4
                    ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                      <FaStar />
                    </IconContext.Provider>
                    : gettingInfo.Stars >= 3.5
                      ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaStarHalfAlt />
                      </IconContext.Provider>
                      : <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaRegStar />
                      </IconContext.Provider>
                }
              </span>
              <span>
                {
                  gettingInfo.Stars >= 5
                    ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                      <FaStar />
                    </IconContext.Provider>
                    : gettingInfo.Stars >= 4.5
                      ? <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaStarHalfAlt />
                      </IconContext.Provider>
                      : <IconContext.Provider value={{ className: "text-accentTextColor text-2xl" }}>
                        <FaRegStar />
                      </IconContext.Provider>
                }
              </span>
            </div>
            <p className='text-xl text-accentColor my-6 text-center'>{gettingInfo.Variety}</p>
            <p className='text-white/30 mb-6'>{gettingInfo.Brand}</p>
          </div>
          <div className='flex justify-around items-center mt-3 max-w-400 mx-auto'>
            <span className='text-white/30'>{gettingInfo.Country}</span>
            <span className='text-white/30'>{gettingInfo.Style}</span>
            <span className='text-white/30'>{gettingInfo['Top Ten']}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPage


/**
 * Brand: "MAMA"
​
Country: "Myanmar"
​
Stars: 5
​
Style: "Pack"
​
"Top Ten": "2016 #10"
​
Variety: "Instant Noodles Coconut Milk Flavour"
​
_id: "b1218073-77e3-43f2-b3ea-7d0f44c82054"
 */
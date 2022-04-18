import { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import { fetchDataFromApi, fetchImagesFromApi } from './http/http'
import { addImageInJSONData } from './utils/utils'
import React from 'react'
import { saveData } from './redux/actions/foodData.action'
import { useSelector, useDispatch } from "react-redux"
import preloader from "./preloader.gif"

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const apiData = useSelector(state => state.saveDataReducer.data)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const foodData = await fetchDataFromApi();
      const foodImageData = await fetchImagesFromApi()
      const customizeFoodData = addImageInJSONData(foodData, foodImageData)
      dispatch(saveData(customizeFoodData))
      localStorage.setItem('apiData', JSON.stringify(customizeFoodData))
      setLoading(false)
    })()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className='mt-6 w-3/4 mx-auto  max-w-900 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-16 sm:mt-16 relative'>
        {
          loading ? <h1 className='absolute left-1/2 transform -translate-x-2/4'><img src={preloader} alt="preloader" /></h1> : (
            apiData.map(d => {
              return <Card key={d._id} image={d.image} Brand={d.Brand} Variety={d.Variety} Country={d.Country} _id={d._id} Styles={d.Style} Stars={d.Stars} TopTen={d['Top Ten']} />
            })
          )
        }
      </div>
    </div>
  )
}

export default App

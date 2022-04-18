import React from 'react'
import { useParams } from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from "react-redux"
import Card from '../../components/Card/Card'

function CountryPage() {
    const apiData = useSelector(state => state.saveDataReducer.data)
    const { country } = useParams()

    return (
        <>
            <Navbar />
            <div className='mt-6 w-3/4 mx-auto  max-w-900 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-16 sm:mt-16'>
                {
                    apiData.map(d => {
              return country === d.Country ? <Card key={d._id} image={d.image} Brand={d.Brand} Variety={d.Variety} Country={d.Country} _id={d._id} Styles={d.Style} Stars={d.Stars} TopTen={d['Top Ten']} />: ""
            })
                }
            </div>

        </>
    )
}

export default CountryPage
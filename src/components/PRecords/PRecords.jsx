import React from 'react'
import Records from './Records'
import Navbar from '../Home/Navbar';


const PRecords = () => {
  return (
    <div className='flex flex-col gap-1 bg-white'>
        <Navbar/>
        <Records/>
    </div>
  )
}

export default PRecords
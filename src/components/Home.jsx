import React from 'react'
import bgimg from '../assests/books.jpg'

const Home = () => {

  let myHomeStyle = {
    height: "92vh",
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div style={myHomeStyle} className='d-flex justify-content-center align-item-center'>
        <h1 className='text-white'>Welcome To TechRel</h1>
    </div>
  )
}

export default Home

import React from 'react'
import TavatHero from '../components/Hero/TavatHero'
import Poxoje from '../components/TavarComponent/Poxoje'
import TavarComment from '../components/TavarComponent/TavarComment'
import Footer from '../components/Footer'

const Tavar = () => {
  return (
    <div>
      <TavatHero /> 
      <Poxoje />
      <TavarComment />
      <Footer />
    </div>
  )
}

export default Tavar

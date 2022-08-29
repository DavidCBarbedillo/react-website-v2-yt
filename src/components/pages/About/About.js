import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSectionB from '../../HeroSectionB';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function About() {
  return (
    <>
      <HeroSectionB {...homeObjOne} />
      
    </>
  );
}

export default About;
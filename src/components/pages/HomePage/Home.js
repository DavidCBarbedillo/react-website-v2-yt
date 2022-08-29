import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSectionB from '../../HeroSectionB';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>
    <HeroSection {...homeObjOne} />
    <HeroSectionB {...homeObjThree} />
    <HeroSectionB {...homeObjTwo} />
    <Pricing />
    <HeroSectionB {...homeObjFour} />
    </>
  );
}

export default Home;
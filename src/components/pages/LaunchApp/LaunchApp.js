import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function LaunchApp() {
  return (
    <>
      <HeroSection {...homeObjOne} />

    </>
  );
}

export default LaunchApp;
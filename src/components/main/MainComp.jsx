import React from 'react';

import BannerComp from './BannerComp';
import SliderComp from './SliderComp';
import SignUpComp from './SignUpComp';
import LearnMoreComp from './LearnMoreComp';

export default function MainComp() {
  return (
    <div id='main-container'>
      <div id='bannerComp-item'>
        <BannerComp />
      </div>

      <div id='sliderComp-item'>
        <SliderComp />
      </div>

      <div id='learnMoreComp-item'>
        <LearnMoreComp />
      </div>

      <div id='signUpComp-item'>
        <SignUpComp />
      </div>
    </div>
  );
}

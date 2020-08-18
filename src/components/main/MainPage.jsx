import React from 'react';

import BannerComp from './BannerComp';
import LearnMoreComp from './LearnMoreComp';
import MainComp from './MainComp';
import NavLandingComp from './NavLandingComp';
import SignUpComp from './SignUpComp';
import SliderComp from './SliderComp';

export default function MainPage({ history }) {
  return (
    <div>
      <MainComp history={history} />
      {/* <BannerComp />
      <NavLandingComp history={history} />
      <SignUpComp />
      <SliderComp history={history} />
      <LearnMoreComp /> */}
    </div>
  );
}

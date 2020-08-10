import React from 'react';
import MainComp from './MainComp';
import NavLandingComp from './NavLandingComp';
import BannerComp from './BannerComp';
import SignUpComp from './SignUpComp';

export default function MainPage({ history }) {
  return (
    <div>
      {/* <BannerComp /> */}
      {/* <NavLandingComp history={history} /> */}
      {/* <MainComp history={history} /> */}
      <SignUpComp />
    </div>
  );
}

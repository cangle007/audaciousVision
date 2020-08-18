import React from 'react';

import NavLandingComp from './NavLandingComp';

export default function BannerComp() {
  return (
    <div className='bannerMain-container'>
      <NavLandingComp />

      <div id='bannerMsg-item'>
        <h1>Achieve More</h1>

        <h3>
          We want to see more Extraordinary Visionary Doers, Makers, Inventors, Artists,
          and Entrepreneurs achieve more for the greatest benefits of humankind
        </h3>

        <div id='bannerBtn'>
          <button>TRY FOR FREE</button>
        </div>
      </div>

      <div className='filter' />
    </div>
  );
}

import React, { useEffect } from 'react';
import AVLogo from '../../images/AVLogo.png';

export default function NavLandingComp() {
  return (
    <div className='navLanding-container'>
      <div id='audaciousLogo-item'>
        <img src={AVLogo} alt='AVLogo' />
      </div>

      <div />

      <div id='routeFeatures-item'>Features</div>

      <div id='routeOurStory-item'>Our Story</div>

      <div id='routeLogin-item'>Login</div>

      <div id='routeSignUp-item'>
        <button id='routeSignUp-item'>Sign up</button>
      </div>
    </div>
  );
}

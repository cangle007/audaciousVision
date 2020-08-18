import React, { useEffect } from 'react';

import AVLogo from '../../images/AVLogo.png';

export default function NavLandingComp() {
  useEffect(() => {
    window.addEventListener('scroll', handle_headerScroll);

    return () => {
      window.removeEventListener('scroll', handle_headerScroll);
    };
  }, []);

  function handle_headerScroll() {
    const navMain_element = document.querySelector('.navLanding-container');

    if (window.scrollY > 0) {
      navMain_element.setAttribute('id', 'navLanding-fixed');
    } else {
      navMain_element.removeAttribute('id');
    }
  }

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

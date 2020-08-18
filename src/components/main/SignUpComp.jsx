import React from 'react';

import AVLogo from '../../images/AVLogo.png';
import facebook from '../../images/icons/facebook.svg';
import facebookFooter from '../../images/icons/facebookFooter.svg';
import gmail from '../../images/icons/gmail.svg';
import instagram from '../../images/icons/instagram.svg';
import linkedin from '../../images/icons/linkedin.svg';
import microsoft from '../../images/icons/microsoft.svg';
import twitter from '../../images/icons/twitter.svg';
import youtube from '../../images/icons/youtube.svg';

export default function SignUpComp() {
  return (
    <div className='signup-container'>
      <div id='form-item'>
        <img src={AVLogo} alt='AVLogo' />
        <form>
          <input id='nameInput' placeholder='Name' type='text' required />
          <input id='emailInput' placeholder='Email' type='text' required />
          <input id='passwordInput' placeholder='Password' type='text' required />

          <button name='submit' type='submit'>
            Sign Up
          </button>
        </form>

        <div id='signUpWith'>
          <p>Or sign up with</p>
          <img src={facebook} alt='facebook' />
          <img src={gmail} alt='gmail' />
          <img src={microsoft} alt='microsoft' />
        </div>

        <div id='login'>
          <p>Already have an account?</p>
          <button>Login</button>
        </div>
      </div>

      <div id='socialMedia-item'>
        <img src={youtube} alt='youtube' />
        <img src={linkedin} alt='linkedin' />
        <img src={twitter} alt='twitter' />
        <img src={instagram} alt='instagram' />
        <img src={facebookFooter} alt='facebookFooter' />
      </div>
    </div>
  );
}

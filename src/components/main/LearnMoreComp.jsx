import React from 'react';

import goals from '../../images/goals.svg';
import ideas from '../../images/ideas.svg';
import rightArrow from '../../images/icons/rightArrow.svg';
import reflections from '../../images/reflections.svg';

export default function LearnMoreComp() {
  return (
    <div className='learnMore-container'>
      <div id='reflections-item'>
        <section>
          <h2>Explore Reflections</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut
            etiam sit amet.
          </p>
          <a href='#!'>
            Learn More
            <img src={rightArrow} alt='rightArrow' />
          </a>
        </section>

        <img src={reflections} alt='reflections' />
      </div>

      <div id='goals-item'>
        <section>
          <h2>Explore Goals</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut
            etiam sit amet.
          </p>

          <a href='#!'>
            Learn More
            <img src={rightArrow} alt='rightArrow' />
          </a>
        </section>

        <img src={goals} alt='goals' />
      </div>

      <div id='ideas-item'>
        <section>
          <h2>Explore Ideas</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut
            etiam sit amet.
          </p>

          <a href='#!'>
            Learn More
            <img src={rightArrow} alt='rightArrow' />
          </a>
        </section>

        <img src={ideas} alt='ideas' />
      </div>

      <div id='ourStory-item'>
        <h1>Our Story</h1>
        <h2>Reflection Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut
          etiam sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut
          etiam sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales
          neque sodales ut etiam sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut
          etiam sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales
          neque sodales ut etiam sit amet. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div>
    </div>
  );
}

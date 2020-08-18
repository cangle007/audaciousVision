import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

import captureYourIdeas from '../../images/icons/captureYourIdeas.svg';
import planYourSuccess from '../../images/icons/planYourSuccess.svg';
import trackYourAccomplishment from '../../images/icons/trackYourAccomplishment.svg';

const sliderIMGs = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function SliderComp() {
  const [imgDetails, setImgDetails] = useState({
    showIndex: false,
    showBullets: true,
    infinite: true,
    showNav: true,
    isRTL: false,
    slideDuration: 450,
    slideInterval: 3000,
    showThumbnails: false,
    showFullscreenButton: false,
    showGalleryFullscreenButton: false,
    showPlayButton: false,
    showGalleryPlayButton: false,
  });

  const {
    showIndex,
    showBullets,
    infinite,
    showNav,
    isRTL,
    slideDuration,
    slideInterval,
    showThumbnails,
    showFullscreenButton,
    showGalleryFullscreenButton,
    showPlayButton,
    showGalleryPlayButton,
    //slideOnThumbnailOver,
    //thumbnailPosition,
  } = imgDetails;

  return (
    <div id='sliderComp-container'>
      <h1>Turning Ideas to Reality</h1>

      <div id='capture-details-item'>
        <section>
          <img src={captureYourIdeas} alt='captureYourIdeas' />
          <h3>Capture Your Ideas</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mollis magna,
            efficitur ornare ante. Donec semper quam vitae nibh pretium, sed posuere mi
            pharetra. Suspendisse potenti.
          </p>
        </section>

        <section>
          <img src={planYourSuccess} alt='planYourSuccess' />
          <h3>Plan Your Success</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mollis magna,
            efficitur ornare ante. Donec semper quam vitae nibh pretium, sed posuere mi
            pharetra. Suspendisse potenti.
          </p>
        </section>

        <section>
          <img src={trackYourAccomplishment} alt='trackYourAccomplishment' />
          <h3>Track Your Accomplishment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mollis magna,
            efficitur ornare ante. Donec semper quam vitae nibh pretium, sed posuere mi
            pharetra. Suspendisse potenti.
          </p>
        </section>
      </div>
      <ImageGallery
        items={sliderIMGs}
        lazyLoad={false}
        infinite={infinite}
        showBullets={showBullets}
        showIndex={showIndex}
        showNav={showNav}
        isRTL={isRTL}
        slideDuration={parseInt(slideDuration)}
        slideInterval={parseInt(slideInterval)}
        showFullscreenButton={showFullscreenButton && showGalleryFullscreenButton}
        showPlayButton={showPlayButton && showGalleryPlayButton}
        showThumbnails={false}
        additionalClass='app-image-gallery'
      />
    </div>
  );
}

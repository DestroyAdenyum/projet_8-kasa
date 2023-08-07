import React from 'react';

import Banner from '../components/Banner';

import AboutBanner from '../assets/images/about_image_banner.png';

function About() {
    return (
        <div>
            <Banner ImageSrc={AboutBanner} BannerTitle='' />
        </div>
    )
}

export default About;

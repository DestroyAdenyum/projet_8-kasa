import React from 'react';

import Banner from '../components/Banner';

import HomeBanner from '../assets/images/home_image_banner.png'

function Home() {
    return (
        <div>
            <Banner ImageSrc={HomeBanner} BannerTitle='Chez vous, partout et ailleurs' />
        </div>
    )
}

export default Home;
import React from 'react';

import Banner from '../components/Banner';
import Card from '../components/Card';

import HomeBanner from '../assets/images/home_image_banner.png'

import data from '../data/data.json';

function Home() {
    return (
        <div className='wrapper'>
            <Banner ImageSrc={HomeBanner} BannerTitle='Chez vous, partout et ailleurs' />
            <section className='cards__section'>
                <div className='cards__container'>
                    {data.map((accommodation) => (
                        <Card key={accommodation.id} title={accommodation.title} imageSrc={accommodation.cover} id={accommodation.id} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home;
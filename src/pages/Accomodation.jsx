import React from 'react';
import { useParams } from 'react-router-dom';

import Collapse from "../components/Collapse";
import Carousel from '../components/Carousel';

import data from '../data/data.json';



function Accomodation() {
    const { id } = useParams();
    const accomodation = data.find(accomodation => accomodation.id === id);

    return (
        <div className='wrapper'>
            <section className='accomodation__description'>
                <Carousel accomodation={accomodation} />
                <div>
                    <div className='title'>
                        <h2>{accomodation.title}</h2>
                        <p className='location'>{accomodation.location}</p>
                    </div>
                    {/* hôte */}
                </div>
                <div>
                    {/* tags */}
                    {/* rating */}
                </div>
                <div className='description'>
                    <Collapse 
                        title='Description'
                        text={accomodation.description}
                        className='description__collapse'
                    />
                    <Collapse 
                        title='Équipements'
                        text={accomodation.equipments}
                        className='description__collapse'
                    />
                </div>
            </section>
        </div>
    )
}

export default Accomodation;

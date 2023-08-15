import React from 'react';
import { useParams } from 'react-router-dom';

import Collapse from "../components/Collapse";
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';

import data from '../data/data.json';


function Accomodation() {
    const { id } = useParams();
    const accomodation = data.find(accomodation => accomodation.id === id);

    return (
        <div className='wrapper'>
            <section className='accomodation__description'>
                <Carousel accomodation={accomodation} />
                <div className='title_host'>
                    <div className='title'>
                        <h2>{accomodation.title}</h2>
                        <p className='location'>{accomodation.location}</p>
                    </div>
                    <Host host={accomodation.host} />
                </div>
                <div className='tags_rating'>
                    <Tags tags={accomodation.tags} />
                    <Rating value={accomodation.rating} />
                </div>
                <div className='description'>
                    <Collapse 
                        title='Description'
                        className='description__collapse'
                        text={accomodation.description}
                    />
                    <Collapse 
                        title='Équipements'
                        className='description__collapse'
                        text={<ul>
                                {accomodation.equipments.map((equipment, index) => (
                                    <li key={index}>
                                        {equipment}
                                    </li>
                                ))}
                            </ul>}
                    />
                </div>
            </section>
        </div>
    )
}

export default Accomodation;

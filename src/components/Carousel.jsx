import React, { useState } from "react";

import LeftArrow from '../assets/Icons/Left_Arrow.png';
import RightArrow from '../assets/Icons/Right_Arrow.png';

function Carousel({ accomodation }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = accomodation.pictures.length;

    function nextSlide() {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    function previousSlide() {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }

    return (
        <div className="carousel">
            <img className="arrowLeft" src={LeftArrow} alt='flèche gauche' onClick={previousSlide}></img>
            <img className="arrowRight" src={RightArrow} alt='flèche droite' onClick={nextSlide}></img>
            <img className="carousel__pictures" src={accomodation.pictures[currentSlide]} alt='images du logement'></img>
            <p className="slideNumber">{currentSlide +1}/{length}</p>
        </div>
    )
}

export default Carousel;
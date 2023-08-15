import React, { useState } from "react";

import Toparrow from '../assets/Icons/Top_Arrow.png'

function Collapse({ title, text, className }) {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction qui bascule l'état isOpen entre true et false (ouverte ou fermée)
    function toggleCollapse() {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`collapse__container ${className}`}>
            <div className="collapse__header">
                <h3 className="collapse__title">{title}</h3>
                <img className={`collapse__arrow ${isOpen ? 'rotate' : ''}`} src={Toparrow} alt='flèche' onClick={toggleCollapse} />
            </div>
            {isOpen && <div className="collapse__content">{text}</div>}
        </div>
    )
}

export default Collapse;

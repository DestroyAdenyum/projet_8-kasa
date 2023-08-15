import React from 'react';

import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <div className='wrapper error'>
            <p className='error__number'>404</p>
            <p className='error__text'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to={'/'} className='error__nav'>Retourner sur la page d’accueil</NavLink>
        </div>
    )
}

export default Error;
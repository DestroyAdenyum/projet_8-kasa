import React from "react";

function Host({ host }) {
    return (
        <div className="host">
            <p className="host__name">{host.name}</p>
            <img className="host__picture" src={host.picture} alt={host.name} />
        </div>
    )
}

export default Host;

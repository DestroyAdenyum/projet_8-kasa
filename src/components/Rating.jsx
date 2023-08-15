import React from "react";

function Rating({ value }) {
    const maxStars = 5;
    const filledStars = Math.min(value, maxStars);

    const stars = [];
    for (let i = 0; i < maxStars; i++) {
        const starClassName = i < filledStars ? "filled" : "empty";
        stars.push(
            <i
                key={i}
                className={`fa-solid fa-star star ${starClassName}`}
            />
    );
  }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating;
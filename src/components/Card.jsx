import { Link } from "react-router-dom";

function Card({ title, imageSrc }) {
    return(
        <Link>
            <div className="card">
                <img className="card__image" src={imageSrc} alt={title}></img>
                <div className="gradient">
                    <h3 className="card__title">{title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card;
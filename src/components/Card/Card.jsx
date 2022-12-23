import React from "react";
import ImageRenderer from "../../utils/ImageRenderer";
import "./card.scss";

const Card = ({ image, title, desc, thumb }) => {
  return (
    <div className="card">
      <div className="card-visual">
        <ImageRenderer image={image} thumb={thumb} />

        <h2>{title}</h2>
      </div>
      <div className="card-content">
        <p>{desc}</p>
        <button>View Design</button>
      </div>
    </div>
  );
};

export default Card;

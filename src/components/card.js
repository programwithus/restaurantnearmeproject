import React from "react";

const CardComponent = ({ name, city, state, photo, rating }) => {
  console.log(name);
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <img
          src={`http://164.90.128.51${photo.url}`}
          alt=""
          style={{ width: 350, height: 180 }}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {city},{state}
          </p>
          <a href="" className="btn btn-outline-success btn-sm">
            Learn More
          </a>
          <a href="" className="btn btn-outline-danger btn-sm">
            <i className="far fa-heart">{rating}</i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;

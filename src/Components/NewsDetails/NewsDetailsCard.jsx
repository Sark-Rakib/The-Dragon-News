import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { details, image_url, title } = news;
  return (
    <div>
      <h2 className="font-semibold">News Details</h2>
      <div className="mt-5 space-y-5">
        <img className="w-full h-[350px] object-cover" src={image_url} alt="" />
        <h1 className="font-semibold">{title}</h1>
        <h2>{details}</h2>
        <Link className="btn btn-accent" to={`/category/${news.category_id}`}>
          Back To Category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;

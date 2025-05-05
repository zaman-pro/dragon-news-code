import React from "react";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleLeft,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { id, image_url, title, category_id } = news;

  return (
    <div className="space-y-5">
      <img className="w-full h-[350px] object-cover" src={image_url} alt="" />
      <h1 className="font-bold text-xl text-primary">{title}</h1>
      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${category_id}`}>
        <FaArrowLeft /> All News in this Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;

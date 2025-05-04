import React from "react";
import { FiEye, FiShare2, FiBookmark } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { format } from "date-fns";
import rating from "daisyui/components/rating";
import { FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author: { name, published_date, img },
    rating: { number },
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="rounded-md border border-base-300 space-y-4">
      {/* Top: Author and Icons */}
      <div className="flex justify-between items-center bg-base-200 p-5">
        <div className="flex items-center gap-3">
          <img src={img} alt={name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-gray-500">
              {format(new Date(published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
          <FiBookmark className="cursor-pointer" />
          <FiShare2 className="cursor-pointer" />
        </div>
      </div>

      <div className="px-5 space-y-4">
        {/* Title */}
        <h2 className="font-bold text-xl text-primary">{title}</h2>

        {/* Thumbnail */}
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full h-60 object-cover rounded "
        />

        {/* Description */}
        <div className="text-sm text-accent">
          {format(new Date(published_date), "PPPP")} | Tag Cloud Tags:{" "}
          {tags.join(", ")} -{" "}
          {/* {details.length > 100 ? details.slice(0, 100) + "..." : details}
          <span className="text-secondary font-medium cursor-pointer ml-1">
            Read More
          </span> */}
          {details.length > 200 ? (
            <>
              {details.slice(0, 100)}...
              <span className="text-secondary font-medium cursor-pointer ml-1">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center border-t border-base-300 text-sm py-5">
          <div className="flex items-center text-orange-400 gap-1">
            {/* {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))} */}

            {Array.from({ length: number }).map((_, i) => (
              <FaStar key={i} />
            ))}

            <span className="ml-2 text-black">{number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FiEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

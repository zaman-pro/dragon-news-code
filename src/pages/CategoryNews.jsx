import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  // console.log(data);

  useEffect(() => {
    if (newsId === 0) {
      setCategoryNews(data);
      return;
    } else if (newsId === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id === newsId);

      setCategoryNews(filteredNews);
    }

    // console.log(filteredNews);
  }, [data, newsId]);

  return (
    <div>
      <h1 className=" font-bold mb-5">
        <span className="text-secondary">{categoryNews.length}</span> News Found
      </h1>

      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;

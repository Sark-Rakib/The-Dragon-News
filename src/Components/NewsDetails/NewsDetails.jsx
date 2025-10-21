import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import RightAside from "../HomeLayout'/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  console.log(data, id);
  useEffect(() => {
    const NewsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(NewsDetails);
  }, [id, data]);
  return (
    <div>
      <header>
        <Header></Header>
        <main className="w-11/12 mx-auto py-10 grid gap-5 md:grid-cols-12 grid-cols-1">
          <section className="md:col-span-9">
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </section>
          <aside className="md:col-span-3">
            <RightAside></RightAside>
          </aside>
        </main>
      </header>
    </div>
  );
};

export default NewsDetails;

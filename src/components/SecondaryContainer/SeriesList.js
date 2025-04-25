import React from "react";
import SeriesCard from "./SeriesCard";

const SeriesList = ({ series, title }) => {
  if (!series?.length) return null;
  return (
    <div className="p-8 pt-4">
      <h1 className="text-lg md:text-2xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-3 ">
          {series?.map((tvSeries) => (
            <SeriesCard poster={tvSeries.poster_path} key={tvSeries.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesList;

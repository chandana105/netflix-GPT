import React from "react";
import SeriesList from "./SeriesList";
import { useSelector } from "react-redux";
import { LATEST, ON_THE_AIR, POPULAR, TOP_RATED } from "../../utils/constants";

const SecondaryContainer = () => {
  const latestSeries = useSelector((store) => store?.series?.latestSeries);
  const onTheAirSeries = useSelector((store) => store?.series?.onTheAirSeries);
  const popularSeries = useSelector((store) => store?.series?.popularSeries);
  const topRatedSeries = useSelector((store) => store?.series?.topRatedSeries);

  return (
    latestSeries && (
      <div className="bg-black text-white ">
        <div className="md:-mt-52 relative z-10 space-y-7">
          <SeriesList title={LATEST} series={latestSeries} />
          <SeriesList title={ON_THE_AIR} series={onTheAirSeries} />
          <SeriesList title={POPULAR} series={popularSeries} />
          <SeriesList title={TOP_RATED} series={topRatedSeries} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

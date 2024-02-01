import React from "react";
import SeriesList from "./SeriesList";
import { useSelector } from "react-redux";
import { LATEST, ON_THE_AIR, POPULAR, TOP_RATED } from "../utils/constants";

const SecondaryContainer = () => {
  const latestSeries = useSelector((store) => store?.series?.latestSeries);
  const onTheAirSeries = useSelector((store) => store?.series?.onTheAirSeries);
  const popularSeries = useSelector((store) => store?.series?.popularSeries);
  const topRatedSeries = useSelector((store) => store?.series?.topRatedSeries);

  return (
    latestSeries && (
      <div className="bg-black text-white ">
        <div className="-mt-52 relative z-10 space-y-7">
          <SeriesList title={LATEST} series={latestSeries} />
          <SeriesList title={ON_THE_AIR} series={onTheAirSeries} />
          <SeriesList title={POPULAR} series={popularSeries} />
          <SeriesList title={TOP_RATED} series={topRatedSeries} />
        </div>

        {/* 
        SeiresList - Popular
          seriesCard * n
        SeiresList - Trending
          seriesCard * n
        SeiresList - Latest
          seriesCard * n
        SeiresList - NowPlaying
          seriesCard * n
      
      */}
      </div>
    )
  );
};

export default SecondaryContainer;

// n number of rows of seriesList :- which contains n number of series card

// ab jo seriespdi hian , no w vlai :- usserender krwayenge hum

// Sec contaienr :- will have SeriesList comp
// then to tell SerieslIst comp :- which serieslist is this :- title, seires passed

// so here wht happens :- main container is absolute , thne comes sec cont
// sec con :- black
// it is like box i nthe box
// and 1st box bg black , its ocntent is coming outside isndie box is out

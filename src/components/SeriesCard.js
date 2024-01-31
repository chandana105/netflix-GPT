import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const SeriesCard = ({ poster }) => {
  return (
    <div className="w-44">
      <img
        src={`${IMG_CDN_URL}${poster}`}
        alt="series card"
        className="w-full"
      />
    </div>
  );
};

export default SeriesCard;

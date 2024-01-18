import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/");
  }, [user, navigate]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

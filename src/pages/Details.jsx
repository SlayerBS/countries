import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>
        <IoArrowBack />
        Back
      </button>
      Details {name}
    </div>
  );
};

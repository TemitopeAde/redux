import React, { useState } from "react";
import { cartProducts } from "../Data/data";
import { useEffect } from "react";
import Loader from "./Loader";
import Fetch from "./fetch";

const Items = () => {

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true)

 
  if (loading) {
    return(
      <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <Loader />
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <div>
        <h1 className="fw-bolder text-center">LATEST PRODUCT</h1>
        
      </div>
      <div className="mt-3 mb-3">
        <form>
          <input
            type="text"
            placeholder="Find products"
            className="form-control"
          />
        </form>
      </div>


        </div>
  );
};

export default Items;

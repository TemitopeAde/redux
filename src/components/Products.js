import React, { useState } from "react";
import { cartProducts } from "../Data/data";
import { useEffect } from "react";
import Loader from "./Loader";

const Items = () => {

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true)

  console.log(cart)
  const url = "https://fakestoreapi.com/products";

  const getProducts = async () => {

    try {
      await fetch(url)
      .then((response) => response.json())
      .then(( result) => {
        setCart(result)
        setLoading(false)
      })
    
    } catch (error) {
      console.log(error)
    }


    
  };

  useEffect(() => {
    getProducts();
  })

  if (loading) {
    return(
      <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <Loader />
      </div>
    )
  }

  return (
    <div className="container m-4">
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

    

    <div className="mt-3 grid-container text-center">
        {cart.map((item) => {
          const { id, title, image, price } = item;
          return (
            <a href="/" key={id}>
              <div  className="pt-3 products">
                <h6 className="fs-6">{title.slice(0, 25)}</h6>
                <img src={image} alt={title} />
                <h6 className="fs-6">${price}</h6>
                <button className="btn btn-primary">ADD TO CART</button>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Items;

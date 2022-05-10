import React from "react";
import { useParams } from "react-router-dom";
import { cartProducts } from "../Data/data";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductById = async () => {
    try {
      await fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setProduct(result);
          setLoading(false)
          console.log(result)
        });
    } catch (error) {}
  };

  useEffect(() => {
    getProductById();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ marginTop: "8rem" }} className="product-grid container">
      <div>
        <img height="600" src={product.image} alt={product.title} />
      </div>
      <div>
        <h3 className="fs-1 mb-3">{product.title}</h3>
        <p className="fs-4">{product.description}</p>
        <p className="fs-5">${product.price}</p>
        <div className="btn-grid">
          <button className="btn btn-primary">ADD TO CART</button>
          <button className="btn btn-danger">GO TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

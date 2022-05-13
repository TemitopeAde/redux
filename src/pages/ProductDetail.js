import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, cart } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";


const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product)
  const cartItem = useSelector((state) => state.cartProduct.cartItems)
  const navigate = useNavigate();
  // console.log(cartItem);
  const url = `https://fakestoreapi.com/products/${id}`;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductById = async () => {
      try {
        await fetch(url)
          .then((response) => response.json())
          .then((result) => {
            dispatch(selectedProduct(result))
            setLoading(false)
          });
      } catch (error) {
        console.log(error)
      }
    };
    getProductById()
  }, [loading]) // eslint-disable-line react-hooks/exhaustive-deps


  // console.log(product)
  const handleClick = () => {
    console.log(dispatch(cart(product)))
    dispatch(cart(cartItem))
  }

  // useEffect(() => {
  //   getProductById();
  // }, []);

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
          <button onClick={handleClick} className="btn btn-primary">ADD TO CART</button>
          <button onClick={() => navigate("/cart")} className="btn btn-danger">GO TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

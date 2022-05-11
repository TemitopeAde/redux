import React, { useState } from "react";
import { useEffect } from "react";
import Loader from "./Loader";
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {setProducts} from '../redux/actions/productActions';


const Items = () => {
  const dispatch = useDispatch();
  const url = 'https://fakestoreapi.com/products?limit=5'
  const [searchField, setSearchField] = useState('')
  const [loading, setLoading] = useState(true)
  const products = useSelector((state) => state.allProducts.products)
  
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  }

  const fetchProducts = async () => {

    try {
      const response = await axios
      .get(url)
      .catch((err) => {
        console.log('error', err)
      })
      dispatch(setProducts(response.data))  
      setLoading(false)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [dispatch])

  const filteredProducts = products.filter((post) => {
    if (searchField === '') {
      return post
    } else if (post.title.toLowerCase().includes(searchField.toLowerCase())) {
      return post
    }
  });

  console.log(filteredProducts)
 
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
            value={searchField}
            onChange={handleSearch}
          />
        </form>
      </div>
      <div className="grid-container">
        {filteredProducts.map((item) => {
            const {id,title, image, price} = item;
          return (
            <div key={id} className="products text-center">
              <h6 className="fs-5">{title}</h6>
              <img src={image} alt={title} />
              <h3>${price}</h3>
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          );
        })}
      </div>

        </div>
  );
};

export default Items;

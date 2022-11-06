import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
// import { setProducts } from '../redux/actions/productActions';
import { listProducts } from './../redux/actions/productActions';

const CarCollection = () => {
   const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  console.log(productList);
  const { loading, error, products } = productList;

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get('/api/products');
    //     // console.log(data);
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    dispatch(listProducts())
  }, []);

  return (
    <div className="container-fluid ">
      <div className="container pt-5 pb-3">
        <div className="heading_container titlepage mb-5">
          <h2>
            <img src="image/heading.png" alt="" />
            Car Collections
          </h2>
        </div>

        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger" />
        ) : (
          <div className="row">
            {products.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 mb-2">
                  <Link to={`/product/${item._id}`}>
                    <div className="rent-item mb-4">
                      <img className="img-fluid mb-4" src={item.image} alt="" />
                      <h4 className="text-uppercase mb-4">{item.name}</h4>
                      <div className="d-flex justify-content-center mb-4">
                        <div className="px-2">
                          <i class="fa-solid fa-car text-primary mr-1"></i>
                          <span>{item.manufac}</span>
                        </div>
                        <div className="px-2 border-left border-right">
                          <i class="fa-solid fa-screwdriver-wrench text-primary mr-1"></i>
                          <span>{item.drive}</span>
                        </div>
                        <div className="px-2">
                          <i class="fa-solid fa-road text-primary mr-1"></i>
                          <span>{item.miles}</span>
                        </div>
                      </div>
                      <h2 className="price-button px-3">Price: {item.price}</h2>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCollection;

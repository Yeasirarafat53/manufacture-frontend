import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../redux/actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector((state) => state.productDetails);

  const [quantity, setQuantity] = useState(1);

  const { loading, error, product } = productDetail;
  // const [selectedImg, setSelectedImg] = useState(product.name);

  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${quantity}`);
  // ?qty=${quantity}
  }

  return (
    <>
      <div class="container-fluid page-header">
        <h1 class="display-3 text-uppercase text-white mb-3">Car Detail</h1>
        <div class="d-inline-flex text-white">
          <h6 class="text-uppercase m-0">
            <a class="text-white" href="/">
              Home
            </a>
          </h6>
          <h6 class="text-body m-0 px-3">/</h6>
          <h6 class="text-uppercase text-body m-0">{product ? product.name : ''}</h6>
        </div>
      </div>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="container-fluid">
            <Link to="/">
              <i class="fa-sharp fa-solid fa-arrow-left-long"></i> Back to Home
            </Link>
          </div>

          <div className="container app">
            <div className="details">
              <div className="big-img">
                <img src={product.image} alt="" className="select" />
                {/* <div class="thumb ms-5 mt-5">
                  {product.mini_img.map((img) => (
                    <img
                      src={img}
                      alt=""
                      class=""
                      // onClick={() => setSelectedImg(img)}
                    />
                  ))}
                </div> */}
              </div>

              <div className="box">
                <div className="row mb-3">
                  <h2>{product.name}</h2>
                  <h5>Price: ${product.price}</h5>
                </div>
                <div className="colors">
                  <button style={{ background: 'red' }}></button>
                  <button style={{ background: 'black' }}></button>
                  <button style={{ background: 'crimson' }}></button>
                  <button style={{ background: 'teal' }}></button>
                </div>
                <p>UI/UX designing, html css tutorials</p>
                <p>{product.details}</p>

                <div className="d-flex">
                  <h6>Status:</h6>
                  <h6>
                    {product.countInStock > 0 ? (
                      <span className="badge text-bg-success ms-2">
                        In Stock
                      </span>
                    ) : (
                      <span className="badge text-bg-danger ms-2">
                        Unavailable
                      </span>
                    )}
                  </h6>
                </div>
                <div className="flex-box d-flex align-items-center mt-2">
                  <h6>Quantity:</h6>
                  {product.countInStock > 0 ? (
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                  ) : (
                    <h6>0</h6>
                  )}
                </div>

                {product.countInStock > 0 && (
                  <button onClick={addToCartHandler} class="cart">
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;

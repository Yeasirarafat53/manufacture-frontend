import React, { useEffect } from 'react';
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './../redux/actions/cartActions';
import MessageBox from './../components/MessageBox';

const CartScreen = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get('qty');
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;

  // jodi product id exist thake taile addToCart action call kore product add kore dite hobe
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/register?redirect=shipping');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sopping Cart</h1>

      <div className="row">
        <div className="col-md-8 ">
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/"><button class="btn btn-success ms-3">shopping now</button></Link>
            </MessageBox>
          ) : (
            <>
              {cartItems.map((item) => {
                return (
                  <div className="list-group">
                    <div className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <img
                            src={item.image}
                            alt="car"
                            class="img-fluid rounded img-thumbnail small me-2"
                          ></img>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div className="col-md-3">
                          <div>
                            <select
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(
                                    item.product,
                                    Number(e.target.value)
                                  )
                                )
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1}>{x + 1}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <p>${item.price}</p>
                        </div>
                        <div className="col-md-2">
                          <button
                            className="btn btn-light"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="col-md-4">
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h5>
              <button
                class="btn btn-warning mt-3 w-100"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;

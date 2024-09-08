import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.js";
import Popular from "../Popular/Popular.jsx";
import { NewCollections } from "../NewCollections/NewCollections.jsx";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Home" />
          <div className="banner">
            <p> </p>
            <h1> </h1>

            <a href="#container">
              <button>
                Scroll Down <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Popular Products</h2>

          <div className="container" id="container">
            <NewCollections />
          </div>

          <h2 className="homeHeading">New Products</h2>

          <div className="container" id="container">
            <Popular />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

import { connect } from "react-redux";
import { addToCart } from "../../../reducers/action/cartActions";
import { getProduct } from "../../../reducers/action/index";
import React, { Component } from "react";
import "../../../stylesheets/ProductDetail.scss";
import {
  removeFromWishList,
  addToWishList,
} from "../../../reducers/action/wishlistAction";
import cartReducer from "../../../reducers/cartReducer";
import ControlledCarousel from "./ControlledCarousel";

class ProductDetail extends Component {
  state = {
    products: this.props.product,
    selectedData: "",
    favorite: false,
    name: this.props.name,
    opened: false,
  };

  handleToggle = (e) => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  };

  handleRemoveFromWishlist = (id) => {
    console.log("remove");
    this.props.removeFromWishList(id);
    this.isFavorite();
  };
  handleAddToWishlist = (id) => {
    console.log("add");
    this.props.addToWishList(id);
    this.isFavorite();
  };

  isFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
  };
  handleAddToCart = (id) => {
    this.props.addToCart(id);
  };

  render() {
    return (
      <div className="product_main--wrapper">
        <div className="product_detail--wrapper">
          <div className="product--left_wrapper">
            <h2 className="product_detail--headline headline-2">
              Product Detail
            </h2>
            <div className="product_detail--product_wrap">
              <div className="product_detail--product_cols">
             
                <div className="product--detail--img">
                <div
                    className="content"
                    style={{ display: this.state.opened ? "block" : "none" , flexWrap:'wrap',textJustify:'center',width:'70%',height:'80%', position:'absolute',background:'rgba(255, 255, 255, 0.80)'}}
                  >
                    <p>{this.state.products.description}</p>
                  </div>
                  <img
                 
                    src={this.state.products.image}
                    alt={this.state.products.id}
                  />
                </div>
                <div className="product--popup--text">
                  <button
                    className="collapsible-btn"
                    onClick={this.handleToggle}
                  >
                    DESCRIPTION
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail--right_wrapper">
            <div className="product_detail--product_cols">
              <div className="product--detail--text">
                <p>Category:{this.state.products.category}</p>
                <p>Name:{this.state.products.name}</p>
                <p>Size:{this.state.products.size}</p>
                <p>Price: {this.state.products.price}</p>
                <p>Color: {this.state.products.color}</p>
                <button
                  className="product_detail--button"
                  onClick={() => {
                    this.handleAddToCart(this.state.products.id);
                  }}
                >
                  ADD TO CART
                </button>
                <figure>
                  <span
                    className={
                      this.state.favorite ? "is-favorite" : "not-favorite"
                    }
                    onClick={() => {
                      this.state.favorite
                        ? this.handleRemoveFromWishlist(this.props.product.id)
                        : this.handleAddToWishlist(this.props.product.id);
                    }}
                  >
                    &#9733;
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="product-carousel">
          <ControlledCarousel products={this.state.products} />
        </div>
      </div>
    );
  }
}

/*connecto to our reducer to change the state of our store  */

const mapStateToProps = (state) => {
  return {
    product: state.getProduct,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    filterProduct: (filteredProduct) => {
      dispatch(getProduct(filteredProduct));
    },
    removeFromWishList: (id) => {
      dispatch(removeFromWishList(id));
    },
    addToWishList: (id) => {
      dispatch(addToWishList(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

import React, { Component } from "react";
import "../../../stylesheets/Cart.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../../reducers/action/cartActions";
import cartReducer from "../../../reducers/cartReducer";

import { data } from "../../../API/data";

class Cart extends Component {
  routeChange = () => {
    let path = `/checkout`;
    this.props.history.push(path);
  };

  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  render() {
    return (
      <div className="checkout--wrapper">
        {this.props.cartList.map((item) => {
          return (
            <li className="checkout--list_item" key={item.id}>
              <div className="checkout--list_img">
                <img src={item.image} alt={item.image} className="" />
              </div>

              <div className="item-desc">
                <span className="title">{item.description}</span>
                <p>{item.category}</p>
                <p>
                  <b>Price: {item.price}€</b>
                </p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <div className="add-remove">
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      +1
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id);
                      }}
                    >
                      -1
                    </i>
                  </Link>
                </div>
                <button
                  className="waves-effect waves-light btn pink remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          );
        })}
        <button className="cart--button" onClick={this.routeChange}>
          Checkout!
        </button>
        <div className="checkout--wrapper">
          <div className="cart">
            <h5>You have ordered:</h5>
            <ul className="collection">{this.props.cartList.length}</ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartList: state.cartReducer.cartList,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

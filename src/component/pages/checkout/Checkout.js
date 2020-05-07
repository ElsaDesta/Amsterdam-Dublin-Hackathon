import React, { Component } from "react";
import "../../../stylesheets/Checkout.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../../../reducers/action/cartActions";
import Payment from "../../payment/Payment";
import { data } from "../../../API/data";
class Checkout extends Component {
  state = {
    data: data.products,
    selectedData: "",
    productList: [1, 2],
    name: this.props.name,
  };
  //to remove the item completely
  handleRemove = (id) => {
    removeItem(data.id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    addQuantity(data.id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    subtractQuantity(data.id);
  };
  render() {
    let addedItems = this.state.productList.length ? (
      this.state.productList.map((item) => {
        return (
          <div className="checkout--wrapper">
            <li className="checkout--list_item avatar" key={item.id}>
              <div className="checkout--list_img">
                <img src={item.img} alt={item.img} className="" />
              </div>

              <div className="item-desc">
                <span className="title">{item.name}</span>
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
                      arrow_drop_up
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id);
                      }}
                    >
                      arrow_drop_down
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
          </div>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="checkout--wrapper">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Payment />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.addedItems,
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
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

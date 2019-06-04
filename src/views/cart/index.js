import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  subQuantity,
  showCart,
  addQuantity,
  clearCart
} from "../../store/cart/thunks";
import Drawer from "@material-ui/core/Drawer";
import CartList from "./components/cartList";
import CartItem from "./components/cartItem";
import CartItemImage from "./components/cartItemImage";
import CartItemDescription from "./components/cartItemDescription";
import CartTotal from "./components/cartTotal";
import Button from "./components/removeAndAdd";

const Content = styled.div`
  background-color: #e6e6e6;
  width: 350px;
`;

const CartTitle = styled.h1`
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
`;

const Cart = props => {
  return (
    <Drawer
      anchor="right"
      open={props.cart.show}
      onClose={() => props.showCart(false)}>
      <div tabIndex={0} role="button" onKeyDown={() => props.showCart(false)}>
        <Content>
          <CartTitle>Cart</CartTitle>
          <CartList>
            {props.cart.items &&
              props.cart.items.map((p, key) => (
                <CartItem key={key}>
                  <CartItemImage src={p.picture} item={p.title} />
                  <CartItemDescription item={p.title} price={p.price}>
                    <Button onClick={() => props.subQuantity(p.id)} text="-" />
                    <span>{p.quantity}x</span>
                    <Button onClick={() => props.addQuantity(p.id)} text="+" />
                  </CartItemDescription>
                </CartItem>
              ))}
          </CartList>
          <CartTotal
            total={"R$" + props.cart.total}
            quantity={props.cart.length}
            cancel={() => props.clearCart()}
            checkout={() => props.showCart(false)}
          />
        </Content>
      </div>
    </Drawer>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {
    subQuantity,
    addQuantity,
    showCart,
    clearCart
  }
)(Cart);

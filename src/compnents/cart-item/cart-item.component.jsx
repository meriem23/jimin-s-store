import React from "react";
//styles
import {
  CartItemContainer,
  CartItemDetail,
  ImageItem,
  ItemName,
  ItemPrice,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <ImageItem src={imageUrl} alt={`${name}`} />
      <CartItemDetail>
        <ItemName as="span">{name}</ItemName>
        <ItemPrice as="span">
          {quantity} x ${price}
        </ItemPrice>
      </CartItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;

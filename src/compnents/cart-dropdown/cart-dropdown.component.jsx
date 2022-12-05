import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//context
import { CartContext } from "../../context/cart.context";
//components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
//styles
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  //state
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  //function

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

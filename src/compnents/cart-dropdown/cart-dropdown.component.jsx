import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//context
import { CartContext } from "../../context/cart.context";
//components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
//styles
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  //state
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  //function

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;

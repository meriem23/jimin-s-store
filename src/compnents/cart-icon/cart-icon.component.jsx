import { useContext } from "react";
//context
import { CartContext } from "../../context/cart.context";
//styles
import { CartIconContainer, Item, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <Item>{cartCount}</Item>
    </CartIconContainer>
  );
};

export default CartIcon;

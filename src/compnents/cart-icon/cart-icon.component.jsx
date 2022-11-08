import {useContext} from "react"
//assets
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//context
import {CartContext} from "../../context/cart.context"
//styles
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const {isCartOpen,setIsCartOpen}= useContext(CartContext)
  const toggleCartOpen = ()=> setIsCartOpen(!isCartOpen)
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;

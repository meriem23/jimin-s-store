import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
//assets
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
//context
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
//components
import CartIcon from "../../compnents/cart-icon/cart-icon.component";
import CartDropdown from "../../compnents/cart-dropdown/cart-dropdown.component";
//utils
import { signOutUser } from "../../utils/firebase/firebase.utils";
//styles
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-conatiner" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

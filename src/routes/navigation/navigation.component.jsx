import { useContext, Fragment } from "react";
import { Outlet } from "react-router-dom";
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
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

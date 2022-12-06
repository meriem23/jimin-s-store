import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, routeName } = category;
  const navigate = useNavigate();
  //functions
  const onNavigation = () => navigate(routeName);
  //render
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={() => onNavigation()}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

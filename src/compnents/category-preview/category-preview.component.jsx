import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  PreviewContainer,
  LinkTitle,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <LinkTitle to={title}>{title.toUpperCase()}</LinkTitle>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

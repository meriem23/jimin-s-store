import DirectoryItem from "../directory-item/directory-item.component";
import "./directory-container.style.scss";

const categories = [
  {
    id: 1,
    routeName: "shop/hats",
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    routeName: "shop/jackets",
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    routeName: "shop/sneakers",
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    routeName: "shop/womens",
    title: "women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    routeName: "shop/mens",
    title: "men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;

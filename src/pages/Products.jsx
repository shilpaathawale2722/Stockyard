import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const data = useSelector((state) => {
    return state.productsData.productItems;
  });

  console.log("Data from Redux", data);

  return (
    <>
      <div className="m-2">Products</div>
      <div className="flex flex-wrap">
        {data.map((product) => {
          return <ProductCard key={product.id} value={product} />;
        })}
      </div>
    </>
  );
};

export default Products;

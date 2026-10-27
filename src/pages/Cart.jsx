import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";

const Cart = () => {
  const cartProducts = useSelector((state) => {
    return state.cartCounter.cartArray;
  });
  const data = useSelector((state) => {
    return state.productsData.productItems;
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <div>
      <div className="flex flex-wrap">
        {cartProducts.map((cartProduct) => {
          const matchedProducts = data.find((product) => {
            return cartProduct == product.id;
          });
          console.log("matchedProduct", matchedProducts);

          return matchedProducts ? (
            <ProductCard key={matchedProducts.id} value={matchedProducts} />
          ) : (
            "No product Found"
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

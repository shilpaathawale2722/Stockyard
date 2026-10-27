import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { increment, setCartArray } from "../redux/CartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  

  return (
    <div className="flex ">
      <div className="m-2 bg-gray-200 rounded-2xl ">
        <div className="w-70 ">
          <img
            className="rounded-t-2xl h-60 w-70"
            src={props.value.image}
            alt=""
          />
        </div>
        <div className="p-3">
          <p className="font-bold">{props.value.name}</p>
          <p>Price: {props.value.price}</p>
          <p>Catogory : {props.value.category}</p>
          <div className="flex text-center mt-3 gap-2 justify-evenly">
            <button
              className="p-3 bg-yellow-300 rounded-xl hover:bg-amber-500"
              onClick={() => {
                dispatch(increment());
                dispatch(setCartArray(props.value.id));
              }}
            >
              Add to Cart
            </button>
            <Link to={`/products/${props.value.id}`}>
              <button className="p-3 bg-blue-500 rounded-xl">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

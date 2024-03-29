import PropTypes from "prop-types";
import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";

const ProductItem = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdd, setIsAdd] = useState(false);

  const handleAddToCart = () => {
    setIsAdd(true);
    onAddToCart(product, quantity);
  };

  const handleCartQuantityPlus = () => {
    setQuantity((prev) => prev + 1);
    onAddToCart(product, quantity + 1);
  };

  const handleCartQuantityMinus = () => {
    setQuantity((prev) => prev - 1);
    onAddToCart(product, quantity - 1);
  };
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-[154px] w-full object-cover"
      />
      <div className="p-4">
        <h4 className="roboto-medium text-[#262626]">{product.title}</h4>
        <div className="flex gap-1">
          {product.discountPercentage ? (
            <>
              <span className="text-[#c0c0c0] line-through">
                ₹{product.price}
              </span>
              <span className="text-[#666666]">
                ₹{product.price * (1 - product.discountPercentage / 100)}
              </span>
            </>
          ) : (
            <span className="text-[#666666]">₹{product.price}</span>
          )}
        </div>

        {isAdd ? (
          <div className="flex items-center gap-3 mt-3">
            <button
              type="button"
              className="text-[#4C52C4] disabled:text-[#C0C0C0]"
              disabled={quantity <= 1}
              onClick={handleCartQuantityMinus}
            >
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              className="text-[#4C52C4]"
              onClick={handleCartQuantityPlus}
            >
              <FaPlus />
            </button>
          </div>
        ) : (
          <button
            className="text-[#4C52C4] text-xl mt-3"
            type="button"
            onClick={handleAddToCart}
          >
            <MdShoppingCart />
          </button>
        )}
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  onAddToCart: PropTypes.any,
  product: PropTypes.shape({
    discountPercentage: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }),
};

export default ProductItem;

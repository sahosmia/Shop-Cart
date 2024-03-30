import { MdKeyboardArrowRight } from "react-icons/md";

const Cart = ({ cart }) => {
  const total = cart.reduce((total, product) => {
    const discountedPrice =
      product.discountPercentage !== null
        ? product.price * (1 - product.discountPercentage / 100)
        : product.price;

    const productTotalPrice = discountedPrice * product.quantity;

    return total + productTotalPrice;
  }, 0);

  return (
    <div className="flex justify-between items-center p-4 bg-[#4C52C4] text-white rounded-lg w-full absolute bottom-0 left-0">
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 bg-[#00E5C9] rounded-full flex justify-center items-center roboto-medium text-xs">
          {cart.length}
        </span>
        <span className="roboto-medium text-sm">In your cart</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="roboto-bold"> ₹{parseInt(total)}</span>
        <button type="button" className="text-2xl">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cart;

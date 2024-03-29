import EmptyImage from "../assets/no-product.png";
const EmptyProduct = () => {
  return (
    <div className="flex justify-center items-center h-[600px] p-4">
      <div className="flex flex-col items-center justify-center h-full">
        <img src={EmptyImage} alt="Empty Image" className="inline-block" />
        <h4 className="roboto-medium text-[#666666]">No product added yet</h4>
        <span className="roboto-regular text-sm text-[#666666]">
          Please tap “+” button below to add new product
        </span>
      </div>
    </div>
  );
};

export default EmptyProduct;

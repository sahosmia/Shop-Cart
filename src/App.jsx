import { useEffect, useState } from "react";

import ProductItem from "./components/ProductItem";
import EmptyProduct from "./components/EmptyProduct";
import Loading from "./components/Loading";
import HeaderAction from "./components/HeaderAction";
import Error from "./components/Error";
import { api } from "./api";
import Cart from "./components/Cart";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  // get data
  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const response = await api.get(`products?q=${search}`);
        if (isMounted) {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  const handleAddToCart = (product, quantity) => {
    const found = cart.find((item) => item.productId === product.id);

    const newCartProduct = {
      productId: product.id,
      quantity: quantity,
      price: product.price,
      discountPercentage: product.discountPercentage,
    };
    if (found) {
      setCart(
        cart.map((item) =>
          item.productId === product.id ? newCartProduct : item
        )
      );
    } else {
      setCart([...cart, newCartProduct]);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex">
      <div className="bg-white w-[360px] h-[800px] mx-auto my-auto ">
        <HeaderAction handleSearch={handleSearch}></HeaderAction>

        {/* body start */}
        <div className="m-4 h-[680px] relative">
          {loading ? (
            <Loading />
          ) : error !== null ? (
            <Error message={error} />
          ) : products.length !== 0 ? (
            <div className="grid grid-cols-2 gap-3 ">
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
              {cart.length !== 0 && <Cart cart={cart} />}
            </div>
          ) : (
            <EmptyProduct />
          )}
        </div>
        {/* body end */}
      </div>
    </div>
  );
}

export default App;

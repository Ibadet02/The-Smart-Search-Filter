import { ChangeEvent, useCallback, useState } from "react";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import useProducts from "./hooks/useProducts";
import "./styles.css";

export default function App() {
  const [searchParams, setSearchParams] = useState({
    category: "",
    query: "",
  });
  const { products, loading, error } = useProducts(
    searchParams.category,
    searchParams.query
  );

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setSearchParams((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  return (
    <>
      <Search searchParams={searchParams} onChange={handleSearch} />
      <ProductList products={products} loading={loading} error={error} />
    </>
  );
}

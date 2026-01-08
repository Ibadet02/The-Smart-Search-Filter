import { memo } from "react";
import { MockData } from "../types";

interface ProductListProps {
  products: MockData;
  loading: boolean;
  error: null | unknown;
}

const ProductList = ({ products, loading, error }: ProductListProps) => {
  if (error) {
    return <div>Error happened. No products to show</div>;
  }

  if (loading) {
    return <div>Loading.........</div>;
  }

  return (
    <div className="App">
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductList);

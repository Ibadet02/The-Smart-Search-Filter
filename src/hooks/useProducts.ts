import { useEffect, useState } from "react";
import { MockData } from "../types";
import mockFetch from "../utils/mockFetch";

const useProducts = (category: string, query: string) => {
  const [products, setProducts] = useState<MockData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const data = await mockFetch(category, query);

        if (!data) {
          throw new Error("Products do not exist");
        }

        setProducts(data);
      } catch (err) {
        setError(err);
        setProducts([]);
      }

      setLoading(false);
    };

    getData();
  }, [category, query]);

  return { products, loading, error };
};

export default useProducts;

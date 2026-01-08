import { useEffect, useState } from "react";
import { MockData } from "../types";
import mockFetch from "../utils/mockFetch";

const useProducts = (category: string, query: string) => {
  const [products, setProducts] = useState<MockData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | unknown>(null);
  const [timeoutId, setTimeoutId] = useState<undefined | number>(undefined);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const resolved = await mockFetch(category, query);

        if (!resolved) {
          throw new Error("Products do not exist");
        }

        const { data, timerId } = resolved;

        setProducts(data);
        setTimeoutId(timerId);
      } catch (err) {
        setError(err);
        setProducts([]);
      }

      setLoading(false);
    };

    getData();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [category, query]);

  return { products, loading, error };
};

export default useProducts;

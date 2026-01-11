import { useEffect, useState } from "react";
import { MockData } from "../types";
import mockFetch from "../utils/mockFetch";

const useProducts = (category: string, query: string) => {
  const [products, setProducts] = useState<MockData>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async () => {
      setLoading(true);

      try {
        const data = await mockFetch(category, query, signal);

        if (!data) {
          throw new Error("Products do not exist");
        }

        setProducts(data);
        setError(null);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    getData();

    return () => {
      controller.abort("New key pressed");
    };
  }, [category, query]);

  return { products, loading, error };
};

export default useProducts;

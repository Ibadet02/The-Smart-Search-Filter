import { MockData } from "../types";

type MockFetch = (
  category: string,
  query: string
) => Promise<{ timerId: number; data: MockData }>;

const mockFetch: MockFetch = (category, query) => {
  return new Promise((resolve) => {
    const delay = Math.random() * 2000 + 200;

    const timerId = setTimeout(() => {
      resolve({
        timerId,
        data: [
          { id: 1, name: `${category} Item - ${query} 1` },
          { id: 2, name: `${category} Item - ${query} 1` },
        ],
      });
    }, delay);
  });
};

export default mockFetch;

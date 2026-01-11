import { MockData } from "../types";

type MockFetch = (category: string, query: string) => Promise<MockData>;

const mockFetch: MockFetch = (category, query) => {
  return new Promise((resolve) => {
    const delay = Math.random() * 2000 + 200;

    setTimeout(() => {
      resolve([
        { id: 1, name: `${category} Item - ${query} 1` },
        { id: 2, name: `${category} Item - ${query} 1` },
      ]);
    }, delay);
  });
};

export default mockFetch;

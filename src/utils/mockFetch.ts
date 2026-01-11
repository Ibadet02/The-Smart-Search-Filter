import { MockData } from "../types";

type MockFetch = (
  category: string,
  query: string,
  signal?: AbortSignal
) => Promise<MockData>;

const mockFetch: MockFetch = (category, query, signal) => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 200;

    const timerId = setTimeout(() => {
      resolve([
        { id: 1, name: `${category} Item - ${query} 1` },
        { id: 2, name: `${category} Item - ${query} 1` },
      ]);
    }, delay);

    signal?.addEventListener("abort", () => {
      clearInterval(timerId);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
};

export default mockFetch;

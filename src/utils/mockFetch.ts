type MockData = { id: number; name: string }[];

const mockFetch = (category: string, query: string): Promise<MockData> => {
  return new Promise((resolve, reject) => {
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

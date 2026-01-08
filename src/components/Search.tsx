import React, { ChangeEvent, memo } from "react";

interface SearchProps {
  searchParams: {
    category: string;
    query: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchParams, onChange }: SearchProps) => {
  const { category, query } = searchParams;
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="search"
        placeholder="search category"
        value={category}
        onChange={onChange}
        name="category"
      />
      <input
        type="search"
        placeholder="search query"
        value={query}
        onChange={onChange}
        name="query"
      />
    </div>
  );
};

export default memo(Search);

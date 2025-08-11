import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products" },
    { name: "description", content: "Search for products" },
  ];
};

export default function SearchPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>SearchPage</h1>
    </div>
  );
}

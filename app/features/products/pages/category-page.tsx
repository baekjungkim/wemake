import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Category Products" },
    { name: "description", content: "Products in this category" },
  ];
};

export default function CategoryPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>CategoryPage</h1>
    </div>
  );
}

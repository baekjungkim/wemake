import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Product Categories" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>CategoriesPage</h1>
    </div>
  );
}

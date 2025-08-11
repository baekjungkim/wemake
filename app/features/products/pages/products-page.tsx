import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Products" },
    {
      name: "description",
      content: "Discover amazing products made by our community",
    },
  ];
};

export default function ProductsPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>ProductsPage</h1>
    </div>
  );
}

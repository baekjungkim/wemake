import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product" },
    {
      name: "description",
      content: "Promote your product to get more visibility",
    },
  ];
};

export default function PromotePage() {
  return (
    <div className="px-20 space-y-40">
      <h1>PromotePage</h1>
    </div>
  );
}

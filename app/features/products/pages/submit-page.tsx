import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product" },
    { name: "description", content: "Submit your product to the community" },
  ];
};

export default function SubmitPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>SubmitPage</h1>
    </div>
  );
}

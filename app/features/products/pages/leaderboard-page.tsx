import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Product Leaderboard" },
    { name: "description", content: "Top products ranked by community votes" },
  ];
};

export default function LeaderboardPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>LeaderboardPage</h1>
    </div>
  );
}

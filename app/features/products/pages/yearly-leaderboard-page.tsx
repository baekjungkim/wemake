import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Product Leaderboard" },
    { name: "description", content: "Top products of the year" },
  ];
};

export default function YearlyLeaderboardPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>YearlyLeaderboardPage</h1>
    </div>
  );
}

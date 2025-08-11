import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Monthly Product Leaderboard" },
    { name: "description", content: "Top products of the month" },
  ];
};

export default function MonthlyLeaderboardPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>MonthlyLeaderboardPage</h1>
    </div>
  );
}

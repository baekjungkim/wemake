import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Product Leaderboard" },
    { name: "description", content: "Top products of the week" },
  ];
};

export default function WeeklyLeaderboardPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>WeeklyLeaderboardPage</h1>
    </div>
  );
}

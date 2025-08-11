import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Product Leaderboard" },
    { name: "description", content: "Top products of the day" },
  ];
};

export default function DailyLeaderboardPage() {
  return (
    <div className="px-20 space-y-40">
      <h1>DailyLeaderboardPage</h1>
    </div>
  );
}

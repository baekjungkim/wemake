import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface TeamCardProps {
  id: string;
  leaderName: string;
  leaderAvatarUrl: string;
  positions: string[];
  projectDescription: string;
  onJoin?: (id: string) => void;
}

export function TeamCard({
  id,
  leaderName,
  leaderAvatarUrl,
  positions,
  projectDescription,
  onJoin,
}: TeamCardProps) {
  const handleJoin = () => {
    onJoin?.(id);
  };

  return (
    <Link to={`/teams/${id}`}>
      <Card className="bg-transparent hover:bg-primary/10 transition-colors">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge
              variant="secondary"
              className="inline-flex shadow-sm items-center text-base"
            >
              <span>@{leaderName}</span>
              <Avatar className="size-5">
                <AvatarImage src={leaderAvatarUrl} />
                <AvatarFallback>{leaderName[0]}</AvatarFallback>
              </Avatar>
            </Badge>
            <span> is looking for </span>
            {positions.map((position, index) => (
              <Badge key={index} className="text-base">
                {position}
              </Badge>
            ))}
            <span> to build </span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" onClick={handleJoin}>
            Join Team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

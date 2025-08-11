import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likeCount: number;
  isLiked?: boolean;
  onLike?: (id: string) => void;
  claimed?: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likeCount,
  isLiked = false,
  onLike,
  claimed = false,
}: IdeaCardProps) {
  const handleLike = () => {
    onLike?.(id);
  };

  return (
    <Card className="bg-transparent hover:bg-primary/10 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span className={cn(claimed ? "blur-xs select-none" : "")}>
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-1">
          <EyeIcon className="size-4" />
          <span>{viewCount}</span>
        </div>
        <DotIcon className="size-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={handleLike}
          className={isLiked ? "text-red-500 border-red-500" : ""}
        >
          <HeartIcon className="size-4" />
          <span>{likeCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${id}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            <LockIcon className="size-4" />
            <span>Claimed</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

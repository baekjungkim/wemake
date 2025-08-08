import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;

  category: string;
  timeAgo: string;
  href?: string;
}

export default function PostCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  timeAgo,
  href = `/community/${id}`,
}: PostCardProps) {
  return (
    <Link to={href}>
      <Card className="bg-transparent hover:bg-primary/10 transition-colors">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarImage src={authorAvatarUrl} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>{author}</span>
              <span>{category}</span>
              <span>·</span>
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            <Link to={href}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

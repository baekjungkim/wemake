import { ChevronUp, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  comments: number;
  views: number;
  votes: number;
  href?: string;
}

export default function ProductCard({
  id,
  name,
  description,
  comments,
  views,
  votes,
  href = `/products/${id}`,
}: ProductCardProps) {
  return (
    <Link to={href}>
      <Card className="w-full flex flex-row items-center justify-between p-4 bg-transparent hover:bg-primary/10">
        <CardHeader>
          <CardTitle className="whitespace-nowrap">{name}</CardTitle>
          <CardDescription className="text-muted-foreground whitespace-nowrap">
            {description}
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessageCircleIcon className="size-4" />
              <span>{comments}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <EyeIcon className="size-4" />
              <span>{views}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col size-14">
            <ChevronUp className="size-4 shrink-0" />
            <span>{votes}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

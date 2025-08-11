import { DotIcon } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  timeAgo: string;
  type: string;
  salary: string;
  positionLocation: string;
  onApply?: (id: string) => void;
}

export function JobCard({
  id,
  title,
  company,
  companyLogoUrl,
  companyHq,
  timeAgo,
  salary,
  type,
  positionLocation,
  onApply,
}: JobCardProps) {
  const handleApply = () => {
    onApply?.(id);
  };

  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent hover:bg-primary/10 transition-colors">
        <CardHeader className="mb-2">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={companyLogoUrl}
              alt={company}
              className="size-10 rounded-full"
            />
            <div className="space-x-2 flex items-center">
              <span className="text-accent-foreground">{company}</span>
              <DotIcon className="size-4" />
              <span className="text-xs text-muted-foreground">{timeAgo}</span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline">{type}</Badge>
            <Badge variant="outline">{positionLocation}</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary}
            </span>
            <span className="text-sm text-muted-foreground">{companyHq}</span>
          </div>
          <Button variant="secondary" size="sm" onClick={handleApply}>
            Apply Now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

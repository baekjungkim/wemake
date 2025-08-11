import { Link, type MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import PostCard from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import ProductCard from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcom to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboard">
              Exploer all All Products &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            comments={12}
            views={12}
            votes={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The best discussions made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all Discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            id={`postId-${index}`}
            title="What is the best productivity tool?"
            author="Baekjung"
            authorAvatarUrl="https://github.com/shadcn.png"
            category="Productivity"
            timeAgo="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            key={`idea-${index}`}
            id={`ideaId-${index}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness plans and progress tracking using AI."
            viewCount={123}
            timeAgo="12 hours ago"
            likeCount={12}
            onLike={(id) => console.log(`Liked idea: ${id}`)}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <JobCard
            key={`job-${index}`}
            id={`jobId-${index}`}
            title="Full Stack Developer"
            company="Facebook"
            companyLogoUrl="https://github.com/facebook.png"
            companyHq="San Francisco, CA"
            timeAgo="12 hours ago"
            salary="$100,000 - $120,000"
            type="Full-Time"
            positionLocation="Remote"
            onApply={(id) => console.log(`Applied to job: ${id}`)}
          />
        ))}
      </div>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const MarketingStories = () => {
  const comments = [
    {
      userId: 1,
      name: "Jessica Johnson",
      role: "Development Lead at Logo1",
      profile: "/user-1.jpg",
      logo: "/logo-1.svg",
      comment:
        "I recomment Nerdflow, especially if you need to sync many of member team in a complex organization. So, the Nerdflow helps use leapfrog the traditional approach to modern team management.",
    },
    {
      userId: 3,
      name: "Jimmy Edward",
      role: "Project Manager at Logo3",
      profile: "/user-3.jpg",
      logo: "/logo-3.svg",
      comment:
        "I cannot stress how important it is to have all of our information in one central place. We use Nerdflow to capture all of our docs, notes, and next steps so we keep consistency.",
    },
    {
      userId: 2,
      name: "Rebecca Dautsan",
      role: "Project Manager at Logo2",
      profile: "/user-2.jpg",
      logo: "/logo-2.svg",
      comment:
        "Onboard your entire team by sending the invite link or adding their email IDs, & ask them to add their tasks daily before beginning the day. The team can now connect over Spaces & call out their tasks.",
    },
    {
      userId: 4,
      name: "Adam Wyatt",
      role: "Development Lead at Logo4",
      profile: "/user-4.jpg",
      logo: "/logo-4.svg",
      comment:
        "Nerdflow is a great tool for managing projects and teams in a fast-paced environment. It allows you to easily track progress, assign tasks, and communicate with your team members. Nerdflow is the ultimate solution for modern team collaboration.",
    },
  ];

  return (
    <div className="relative mt-10 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-10rem)] md:max-h-[calc(100vh-10rem)] overflow-hidden">
      <video autoPlay muted loop className="md:flex hidden">
        <source src="/video-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute flex items-center justify-center mx-auto -top-10 left-0 md:h-full min-h-[calc(100vh-6rem)] w-full bg-background/80">
        <div className="container px-8">
          <h1 className="text-4xl text-left lg:text-center font-semibold text-gray-700 dark:text-gray-300 max-w-11/12 md:max-w-[70%] mx-auto my-16">
            Join us and get the convenience of manageing more professional teams
          </h1>
          <Carousel className="max-w-[85%] mx-auto">
            <CarouselContent className="mx-auto">
              {comments.map((comment) => (
                <CarouselItem
                  key={comment.userId}
                  className="basis-full lg:basis-1/3"
                >
                  <Card className="xl:w-80 max-w-full w-full shadow h-80">
                    <div className="h-full flex flex-col justify-between">
                      <CardHeader>
                        <CardTitle>
                          <img
                            src={comment.logo}
                            className="h-4"
                            alt={comment.logo}
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm font-semibold">
                        &#x201C;{comment.comment}&#x201D;
                      </CardContent>
                      <CardFooter>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 overflow-hidden rounded-full">
                            <img
                              src={comment.profile}
                              className="w-full"
                              alt="User 1"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <span className="text-xs font-medium">
                              {comment.name}
                            </span>
                            <CardDescription className="text-xs  font-medium">
                              {comment.role}
                            </CardDescription>
                          </div>
                        </div>
                      </CardFooter>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MarketingStories;

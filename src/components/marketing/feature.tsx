import { Link } from "@tanstack/react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowRight, CalendarClock, KanbanSquareDashed, ListChecks } from "lucide-react";
import { ReactNode } from "react";

interface Card {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const MarketingFeature = () => {
  const cardList: Card[] = [
    {
      id: 1,
      title: "List & Grid view",
      description:
        "Organize and assign tasks. With list and grid view, teams see immediately what they need to do, which tasks are a priority, and when work is due",
      icon: <ListChecks strokeWidth={1} className="w-12 h-12" />,
    },
    {
      id: 2,
      title: "Timeline",
      description:
        "See how work maps out over time. Manage dependent, overlapping, unscheduled tasks, and create plans your team can count on",
      icon: <CalendarClock strokeWidth={1} className="w-12 h-12" />,
    },
    {
      id: 3,
      title: "Board",
      description:
        "See how work maps out over time. Manage dependent, overlapping, unscheduled tasks, and create plans your team can count on",
      icon: <KanbanSquareDashed strokeWidth={1} className="w-12 h-12" />,
    },
  ];
  return (
    <div
      id="feature"
      className="bg-primary bg-cover bg-no-repeat  h-full my-10 py-14"
    >
      <div className="flex flex-col min-h-[calc(100vh-14rem)] container p-4 py-8">
        <h1 className="w-full text-center text-5xl text-primary-foreground font-semibold my-6">
          Stay organized and connected
        </h1>
        <p className="md:max-w-[80%] mx-auto text-center text-primary-foreground font-medium text-sm mb-16">
          Bring your team's work together in one shared space. Choose the
          project view that suits your style, and collaborate no matter where
          you are. Keep control of your team and team costs at all time.
        </p>
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 flex items-center justify-center lg:justify-between flex-wrap gap-10">
            {cardList.map((card: Card) => (
              <Card
                key={card.id}
                className="flex flex-col justify-between max-w-[95%] md:w-96 h-[26rem] shadow-lg hover:-translate-y-4 hover:scale-[1.02] transition duration-700"
              >
                <CardHeader className="flex flex-col gap-y-10">
                  <div className="w-24 h-24 flex items-center justify-center shadow-2xl rounded-full bg-primary text-primary-foreground">
                    {card.icon}
                  </div>
                  <CardTitle className="font-semibold">{card.title}</CardTitle>
                  <CardDescription className="text-base text-medium text-gray-600 dark:text-gray-300">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link className="flex items-center gap-2 text-primary hover:bg-primary hover:text-primary-foreground dark:text-primary-foreground text-sm p-1 hover:shadow">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingFeature;

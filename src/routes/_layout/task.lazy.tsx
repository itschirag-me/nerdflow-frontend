import useMetaDocument from "@/hooks/useMetaDocument";
import { createLazyFileRoute } from "@tanstack/react-router";

const TaskComponent = () => {
  useMetaDocument("Tasks");
  return <div>TaskComponent</div>;
};

export const Route = createLazyFileRoute("/_layout/task")({
  component: TaskComponent,
});

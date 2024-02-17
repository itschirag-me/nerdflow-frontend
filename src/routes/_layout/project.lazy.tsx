import useMetaDocument from "@/hooks/useMetaDocument";
import { createLazyFileRoute } from "@tanstack/react-router";

const ProjectComponent = () => {
  useMetaDocument("Projects");
  
  return <div>ProjectComponent</div>;
};

export const Route = createLazyFileRoute("/_layout/project")({
  component: ProjectComponent,
});

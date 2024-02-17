import useMetaDocument from "@/hooks/useMetaDocument";
import { createLazyFileRoute } from "@tanstack/react-router";
const Dashboard = () => {
  useMetaDocument("Dashboard");

  return <div>Dashboard</div>;
};

export const Route = createLazyFileRoute("/_layout/dashboard")({
  component: Dashboard,
});

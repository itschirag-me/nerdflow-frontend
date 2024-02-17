import { createFileRoute } from "@tanstack/react-router";

const SignIn = () => {
  return <div className="h-screen w-full"></div>;
};

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
});

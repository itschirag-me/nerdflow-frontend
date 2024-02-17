import useMetaDocument from "@/hooks/useMetaDocument";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

const Team = () => {
  useMetaDocument("Teams");

  const { data: teamData, isLoading } = useQuery({
    queryKey: ["teams"],
    queryFn: () => {
      return fetch("http://localhost:5000/api/v1/team")
        .then((res) => res.json())
        .then((res) => res);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {teamData.data &&
        teamData.data.map((team: { id: number; name: string }) => {
          return <div key={team.id}>{team.name}</div>;
        })}
    </div>
  );
};

export const Route = createLazyFileRoute("/_layout/team")({
  component: Team,
});

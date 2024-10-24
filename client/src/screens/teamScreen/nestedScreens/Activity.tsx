import DisplayCard from "../../../components/displayCard/DisplayCard";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useTeam } from "../../../hooks/useTeam";

const Activity = () => {
  const { team } = useTeam();
  const teamInvites = team?.invites
    ?.map((invite) => {
      if (invite.league !== null) {
        return {
          leagueInvitation: invite?.league?.name,
        };
      }
    })
    .filter((invite) => invite !== undefined);

  const playerInvites = team?.invites
    ?.map((invite) => {
      if (invite.player !== null) {
        return {
          requestToJoin: invite?.player?.name,
        };
      }
    })
    .filter((invite) => invite !== undefined);

  return (
    <SubScreenLayout>
      <DisplayCard header={"Team Activity"}>
        <strong>Team Invites</strong>
        <ul>
          {teamInvites?.map((invite) => {
            return (
              <li key={invite?.leagueInvitation}>{invite.leagueInvitation}</li>
            );
          })}
        </ul>

        <strong>Player Requests</strong>
        <ul>
          {playerInvites?.map((request) => {
            return <li key={request.requestToJoin}>{request.requestToJoin}</li>;
          })}
        </ul>
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default Activity;

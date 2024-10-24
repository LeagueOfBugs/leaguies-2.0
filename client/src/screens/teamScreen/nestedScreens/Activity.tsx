import DisplayCard from "../../../components/displayCard/DisplayCard";
import { ListItem } from "../../../components/ListItem";
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

  const handleOnAcceptPlayer = () => {};

  const handleOnAcceptTeam = () => {};

  const handleOnDecline = () => {};

  return (
    <SubScreenLayout>
      <DisplayCard header={"Team Activity"}>
        <strong>Team Invites</strong>
        <ul>
          {teamInvites?.map((invite, index) => {
            return (
              <ListItem
                key={index.toString()}
                showAcceptDecline
                onAccept={handleOnAcceptTeam}
                onDecline={handleOnDecline}
              >
                {invite.leagueInvitation}
              </ListItem>
            );
          })}
        </ul>
        <strong>Player Requests</strong>
        <ul>
          {playerInvites?.map((request) => {
            return (
              <ListItem
                key={request.requestToJoin}
                showAcceptDecline
                onAccept={handleOnAcceptPlayer}
                onDecline={handleOnDecline}
              >
                {request.requestToJoin}
              </ListItem>
            );
          })}
        </ul>
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default Activity;

import DisplayCard from "../../../components/displayCard/DisplayCard";
import { ListItem } from "../../../components/ListItem";
import SubScreenLayout from "../../../components/SubScreenLayout";
import { useTeam } from "../../../hooks/useTeam";
import { respondToInvite } from "../../../service/invite";

const Activity = () => {
  const { team } = useTeam();

  const teamInvites = team?.invites
    ?.map((invite) => {
      if (invite.league !== null && invite.status === "pending") {
        return {
          ...invite,
          league: invite?.league?.name,
        };
      }
    })
    .filter((invite) => invite !== undefined);

  const playerInvites = team?.invites
    ?.map((invite) => {
      if (invite.player !== null && invite.status === "pending") {
        return {
          ...invite,
          player: invite?.player?.name,
        };
      }
    })
    .filter((invite) => invite !== undefined);

  const acceptedInvites = team?.invites?.filter((invite) => {
    const status = invite.status;
    return status == "accept" || status == "decline";
  });

  const inviteHistory = [];

  if (acceptedInvites) {
    for (const invites of acceptedInvites) {
      console.log(invites);
      if (invites.league) {
        if (invites.status === "accept") {
          inviteHistory.push(
            <li>
              {team.name} <span className="text-green-500 ">joined</span>{" "}
              {invites.league.name}
            </li>
          );
        } else {
          console.log(invites.status);
          inviteHistory.push(
            <li>
              {team.name}{" "}
              <span className="text-red-500 ">declined to join</span>{" "}
              {invites.league.name}
            </li>
          );
        }
      }
    }
  }

  console.log(inviteHistory);
  const handleAccecpt = async (invitationId: number) => {
    const message = "accept";
    await respondToInvite(message, invitationId);
  };

  const handleDecline = async (invitationId: number) => {
    const message = "decline";
    await respondToInvite(message, invitationId);
  };

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
                onAccept={() => handleAccecpt(invite.id)}
                onDecline={() => handleDecline(invite.id)}
              >
                {invite.league}
              </ListItem>
            );
          })}
        </ul>
        <strong>Player Requests</strong>
        <ul>
          {playerInvites?.map((request) => {
            return (
              <ListItem
                key={request.player}
                showAcceptDecline
                onAccept={() => handleAccecpt(request.id)}
                onDecline={() => handleDecline(request.id)}
              >
                {request.player}
              </ListItem>
            );
          })}
        </ul>
      </DisplayCard>

      <DisplayCard header={"history"}>
        {<ul>{...inviteHistory}</ul>}
      </DisplayCard>
    </SubScreenLayout>
  );
};

export default Activity;

import axios from "axios";

export const createInvite = async (
  inviterId: number,
  inviterType: string,
  inviteeId: number,
  inviteeType: string
) => {
  const inviteEndpoint = "http://localhost:8080/api/invitations/create";
  const response = await axios.post(inviteEndpoint, {
    status: "pending",
    inviterId: inviterId,
    inviterType: inviterType,
    inviteeId: inviteeId,
    inviteeType: inviteeType,
  });
  return response.data;
};

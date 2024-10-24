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

export const respondToInvite = async (
  message: string,
  invitationId: number
) => {
  const inviteEndpoint = "http://localhost:8080/api/invitations/response";
  console.log(message, invitationId);
  try {
    const response = await axios.post(inviteEndpoint, {
      response: message,
      id: invitationId,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
  }
};

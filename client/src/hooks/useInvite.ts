import { useState } from "react";
import { createInvite as createInviteService } from "../service/invite";

const useCreateInvite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const createInvite = async (
    inviterId: number,
    inviterType: string,
    inviteeId: number,
    inviteeType: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const inviteData = await createInviteService(
        inviterId,
        inviterType,
        inviteeId,
        inviteeType
      );
      return inviteData;
    } catch (error) {
      console.log("Error creating invite:", error);
      setError("Failed to create invite.");
    } finally {
      setLoading(false);
    }
  };

  return { createInvite, loading, error };
};

export default useCreateInvite;

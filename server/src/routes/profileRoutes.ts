import { AuthenticatedFastifyInstance } from "../../server";

async function profileRoutes(server: AuthenticatedFastifyInstance) {
  server.get(
    "/profile",
    { preValidation: [server.authenticate] },
    async (req, res) => {
      const user = req.user;
      return res.status(200).send({ message: "Profile data", user });
    }
  );
}

export default profileRoutes;

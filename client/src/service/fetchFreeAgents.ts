import axios from "axios";

type Team = {
  createdAt: Date;
  updatedAt: Date;
  id: number;
  name: string;
};

const fetchFreeAgents = async (): Promise<Team[]> => {
  const fetchFreeAgentsEndpoint = `http://localhost:8080/api/players/free-agents`;
  try {
    const response = await axios.get<Team[]>(fetchFreeAgentsEndpoint);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch free agents, ${error}`);
  }
};

export default fetchFreeAgents;

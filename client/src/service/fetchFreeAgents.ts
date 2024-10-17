import axios from "axios";

const fetchFreeAgents = async () => {
  const fetchFreeAgentsEndpoint = `http://localhost:8080/api/players/free-agents`;
  try {
    const response = await axios.get(fetchFreeAgentsEndpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchFreeAgents;

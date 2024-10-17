import axios from "axios";

const fetchNearbyTeams = async () => {
  const fetchTeamsEndpoint = "http://localhost:8080/api/teams/unregistered";
  try {
    const response = await axios.get(fetchTeamsEndpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchNearbyTeams;

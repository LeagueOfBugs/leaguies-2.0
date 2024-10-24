import axios from "axios";

const fetchTeam = async (id: string) => {
  const fetchTeamsEndpoint = `http://localhost:8080/api/teams/${id}`;
  try {
    const response = await axios.get(fetchTeamsEndpoint);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchTeam;

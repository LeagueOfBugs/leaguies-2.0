import { Spinner } from "../components/ui/spinner";
import useFetchPlayer from "../hooks/useFetchPlayer";

const SplashScreen = () => {
  const { loading, error, playerData } = useFetchPlayer();

  if (loading) {
    return <Spinner show={loading} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("rendered", playerData);

  return <div>{playerData.name}</div>;
};

export default SplashScreen;

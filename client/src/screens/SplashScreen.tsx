import { useEffect } from "react";
import { Spinner } from "../components/ui/spinner";
import useFetchPlayer from "../hooks/useFetchPlayer";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const { loading, playerData } = useFetchPlayer();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (!loading && playerData) {
      timeoutId = setTimeout(() => {
        navigate("/home");
      }, 3000); // 3-second delay
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [loading, playerData, navigate]);

  if (loading) {
    return <Spinner show={loading} />;
  }

  return <div>LEAGUIES</div>;
};

export default SplashScreen;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchPlayer } from "../redux/reducers/playerReducer";

const useFetchPlayer = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, ...playerData } = useSelector(
    (state: RootState) => state.player
  );

  useEffect(() => {
    dispatch(fetchPlayer());
  }, [dispatch]);

  return { loading, error, playerData };
};

export default useFetchPlayer;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchPlayer } from "../redux/reducers/userReducer";

const useFetchPlayer = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, ...playerData } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchPlayer());
  }, [dispatch]);

  return { loading, error, playerData };
};

export default useFetchPlayer;

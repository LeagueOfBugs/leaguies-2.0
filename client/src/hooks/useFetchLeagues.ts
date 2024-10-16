import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchLeague } from "../redux/reducers/leagueReducer";

const useFetchLeague = (leagueId: string) => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, ...leagueData } = useSelector(
    (state: RootState) => state.league
  );

  useEffect(() => {
    dispatch(fetchLeague(leagueId));
  }, [dispatch, leagueId]);

  return { loading, error, leagueData };
};

export default useFetchLeague;

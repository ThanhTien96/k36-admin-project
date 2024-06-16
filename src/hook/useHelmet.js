import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAppTitle } from "../store/app/reducer";

const useHelmet = (title) => {
  const dispatch = useDispatch();
  const helmetTitle = useSelector(state => state.app.app_title)

  const setHelmetProps = useCallback(
    (attb) => {
      dispatch(updateAppTitle(attb));
    },
    [dispatch]
  );

  useEffect(() => {
    setHelmetProps(title);
  }, [dispatch, helmetTitle, setHelmetProps, title]);

  return [helmetTitle, setHelmetProps]
};

export default useHelmet;

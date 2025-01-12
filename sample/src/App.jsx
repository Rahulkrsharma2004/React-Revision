import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { fetchData } from "./dataSlice";
import DataShow from "./DataShow";

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <DataShow result={data} />}
    </>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

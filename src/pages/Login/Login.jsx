import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useAPI } from "../../hooks/useAPI";
import { useQuery } from "../../hooks/useQuery";

const Login = () => {
  const { client_id, redirect_uri, client } = useSelector(
    (state) => state.auth
  );
  const { query } = useQuery();
  const { authenticate } = useAPI();

  useLayoutEffect(() => {
    if (query.code) {
      authenticate({ client_id, redirect_uri, client, code: query.code });
    }
  }, []);
  return (
    <div className="App-header">
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=user&redirect_uri=${redirect_uri}`}
      >
        Login
      </a>
    </div>
  );
};

export default Login;

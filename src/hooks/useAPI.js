import axios from "axios";

// axios.defaults.baseURL = "https://www.github.com/login/oauth"
export const useAPI = () => {
  const authenticate = async ({ client_id, redirect_uri, client, code }) => {
    try {
      const { data } = await axios.post(
        "/access_token",
        { client_id, redirect_uri, client, code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return {
    authenticate,
  };
};

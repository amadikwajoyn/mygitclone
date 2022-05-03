import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../slices/authSlice";
import { fetchUserRepositories } from "../slices/repoSlice"

// axios.defaults.baseURL = "https://www.github.com/login/oauth"
export const useAPI = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const authenticate = async ({ client_id, redirect_uri, client, code }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}/authenticate`,
        { client_id, redirect_uri, client, code },
        {
          headers: {
            "Content-Type": "application/json",
          },
          crossdomain: true,
        }
      );
      if (data.id) {
        dispatch(login({ isLoggedIn: true, user: data }));
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        toast(error.response.data.message, { type: "error" });
      } else {
        toast(error.message, { type: "error" });
      }
    }
  };

  const getUserRepos = async () => {
    try {
      const { data } = await axios.get(`${auth.user.repos_url}?per_page=20&sort=created`);
      dispatch(fetchUserRepositories(data))
    } catch (error) {
      if (error.response) {
        toast("An error occurred", { type: "error" });
      } else {
        toast(error.message, { type: "error" });
      }
    }
  };

  return {
    authenticate,
    getUserRepos,
  };
};

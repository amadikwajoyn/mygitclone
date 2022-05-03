import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  proxy_url: process.env.REACT_APP_PROXY_URL,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
        localStorage.setItem("user", JSON.stringify(action.payload.user))
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          user: action.payload.user,
        };
    },
    logout(state) {
      localStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

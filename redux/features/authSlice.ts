import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isLoad: boolean;
}

const initialState = {
  isAuthenticated: false,
  isLoad: true,
} as AuthState;


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: state => {
      state.isAuthenticated = true;
    },
    logout: state =>{
        state.isAuthenticated = false;
    },
    finishedInitialLoad: state => {
        state.isLoad = false;
    },
    
  },
});

export const { setAuth, logout, finishedInitialLoad } = authSlice.actions;
export default authSlice.reducer;

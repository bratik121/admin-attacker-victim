import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../types";

const initailState: auth = {
	isLoged: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initailState,
	reducers: {
		setAuth: (state, action: PayloadAction<auth>) => {
			state.isLoged = action.payload.isLoged;
		},
		logOut: (state) => {
			state.isLoged = false;
		},
	},
});

export const { setAuth, logOut } = authSlice.actions;
export default authSlice.reducer;

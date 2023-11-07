import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin";
import authReducer from "./features/auth";

export const store = configureStore({
	reducer: {
		admin: adminReducer,
		auth: authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

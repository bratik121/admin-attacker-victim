import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { admin } from "../../types";

const initailState: admin = {
	nombre: "",
	apellido: "",
	email: "",
	password: "",
	cedula: "",
};

const adminSlice = createSlice({
	name: "admin",
	initialState: initailState,
	reducers: {
		setAdmin: (state, action: PayloadAction<admin>) => {
			state.nombre = action.payload.nombre;
			state.apellido = action.payload.apellido;
			state.email = action.payload.email;
			state.password = action.payload.password;
			state.cedula = action.payload.cedula;
		},
	},
});

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;

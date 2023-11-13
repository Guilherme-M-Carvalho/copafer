import { configureStore } from "@reduxjs/toolkit";
import { routesReducer } from "./routes/routesSlice";

export const store = configureStore({
    reducer: {
        routes: routesReducer
    }
})

type GetStateType = typeof store.getState;

export type  RootState = ReturnType<GetStateType>
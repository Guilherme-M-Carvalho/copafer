import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../constants/modules"; 
const moduleSys = {...modules[0]}
delete moduleSys.icon

const initialState = {
    module: moduleSys,
}

export const routesSlice = createSlice({
    name: "routes",
    initialState: initialState,
    reducers: {
        handleModule: (state, action) => {
            const { moduleSys } = action.payload
            state.module = moduleSys
        },
    }
})

export const  { handleModule } = routesSlice.actions

export const routesReducer = routesSlice.reducer;
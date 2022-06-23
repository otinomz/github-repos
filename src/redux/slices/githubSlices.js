import { createSlice } from "@reduxjs/toolkit"

// slices to manage actions and change the state
const initialState = {
    profile: {},
    repositoriesList: []
}

const repositoriesSlices = createSlice({
    name: "repositories",
    initialState,

    reducers: {
        
        addProfile(state, action) {
            state.profile = action.payload
        },

        addRepositories(state, action) {
            state.repositoriesList = action.payload
        },

    }, 
})


export const { addProfile, addRepositories } = repositoriesSlices.actions

export default repositoriesSlices.reducer


import {createSlice} from "@reduxjs/toolkit"
// import { fetchProfileAction, fetchRepositoriesAction } from "../../packages/api";

import axios from "axios"

// create action for the user Profile
export const fetchProfileAction = ("profileList",
    async (user, {
            rejectWithValue,
            getState,
            dispatch
        }) => {
    
    try {
        // make HTTP call here 
        const { data } = await axios.get(`https://api.github.com/users/${user}`)
        
        return data
    } catch (error) {
        if (!error?.response) {
            throw error
        }
        return rejectWithValue(error?.response)
    }
})


// create action for the repositories
export const fetchRepositoriesAction = ("repositoryList",
    async (user, {
            rejectWithValue,
            getState,
            dispatch
        }) => {
    
    try {
        // make HTTP call here 
        const { data } = await axios.get(`https://api.github.com/users/${user}/repos?per_page=20&sort=asc`)
        
        return data
    } catch (error) {
        if (!error?.response) {
            throw error
        }
        return rejectWithValue(error?.response)
    }
})


// slices to manage actions and change the state
const repositoriesSlices = createSlice({
    name: "repositories",
    initialState: {
        user: "Otinomz"
    },

    // extraReducers: (builder) => {
        
    //     builder.addCase(fetchRepositoriesAction.pending, (state, action) => {
    //         state.loading = true
    //     });

    //     builder.addCase(fetchRepositoriesAction.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.reposList = action?.payload
    //         state.error = undefined
    //     });

    //     builder.addCase(fetchRepositoriesAction.rejected, (state, action) => {
    //         state.loading = false
    //         state.reposList = undefined
    //         state.error = action?.payload
    //     });

    //     // profile section
    //     builder.addCase(fetchProfileAction.pending, (state, action) => {
    //         state.loading = true
    //     });

    //     builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.profile = action?.payload
    //         state.error = undefined
    //     });

    //     builder.addCase(fetchProfileAction.rejected, (state, action) => {
    //         state.loading = false
    //         state.profile = undefined
    //         state.error = action?.payload
    //     })

    // }, 
})

export default repositoriesSlices.reducer




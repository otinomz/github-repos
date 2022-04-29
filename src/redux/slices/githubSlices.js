import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"

// create action
export const fetchRepositoriesAction = ("repositoryList",
    async (user, {
            rejectWithValue,
            getState,
            dispatch
        }) => {
    
        try {
            // make HTTP call here 
            const res = await axios.get(`https://api.github.com/users/${user}/repos?per_page=20`)

        } catch (error) {
            
        }
})

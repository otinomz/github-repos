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
            const { data } = await axios.get(`https://api.github.com/users/${user}/repos?per_page=20&sort=asc`)
            
            return data
        } catch (error) {
            if (!error?.response) {
                throw error
            }
        }
})

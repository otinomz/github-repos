import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios"

// create action
export const fetchRepositoriesAction = ("repositoryList",
    async (payload, {
            rejectWithValue,
            getState,
            dispatch
        }) => {
    
        try {
            // make HTTP call here
        } catch (error) {
            
        }
})

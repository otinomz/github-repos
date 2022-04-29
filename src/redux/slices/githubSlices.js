import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { fetchRepositoriesAction } from "./githubActions";

// slices to manage actions and change the state
const repositoriesSlice = createSlice({
    name: "repositories",
    initialState: {},
    extraReducers: (builder) => {
        
        builder.addCase(fetchRepositoriesAction.pending, (state, action) => {
            state.loading = true
        });

        builder.addCase(fetchRepositoriesAction.fulfilled, (state, action) => {
            state.loading = false
            state.reposList = action?.payload
            state.error = undefined
        });

        builder.addCase(fetchRepositoriesAction.rejected, (state, action) => {
            state.loading = false
            state.reposList = undefined
            state.error = action?.payload
        });
    }, 
})



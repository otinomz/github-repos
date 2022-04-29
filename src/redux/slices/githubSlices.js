import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { fetchProfileAction, fetchRepositoriesAction } from "../../packages/api";


// slices to manage actions and change the state
const repositoriesSlices = createSlice({
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

        // profile section
        builder.addCase(fetchProfileAction.pending, (state, action) => {
            state.loading = true
        });

        builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
            state.loading = false
            state.profile = action?.payload
            state.error = undefined
        });

        builder.addCase(fetchProfileAction.rejected, (state, action) => {
            state.loading = false
            state.profile = undefined
            state.error = action?.payload
        })

    }, 
})

export default repositoriesSlices.reducer




import { createSlice } from "@reduxjs/toolkit"
import { fetchProfileAction, fetchRepositoriesAction } from "../../packages/api";


// slices to manage actions and change the state
const repositoriesSlices = createSlice({
    name: "repositories",
    initialState: {
        user: ""
    },

    reducers:  {
        addName : (state, action) =>  {
            state.user = action.payload
        }
    },

    extraReducers: (builder) => {
        
        builder.addCase(fetchRepositoriesAction.pending, (state) => {
            state.loading = true
        });

        builder.addCase(fetchRepositoriesAction.fulfilled, (state, action) => {
            state.loading = false
            state.repositoriesList = action?.payload
            state.error = undefined
        });

        builder.addCase(fetchRepositoriesAction.rejected, (state, action) => {
            state.loading = false
            state.repositoriesList = undefined
            state.error = action?.payload
        });

        // profile section
        builder.addCase(fetchProfileAction.pending, (state) => {
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

// export default repositoriesSlices.reducer


// const { actions, reducer } = repositoriesSlices

// export const { addName } = actions

// export default reducer
const { actions, reducer } = repositoriesSlices
export const { addName } = actions
export default reducer;
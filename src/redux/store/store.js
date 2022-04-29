import { configureStore } from '@reduxjs/toolkit'
import repositoriesReducer from '../slices/githubSlices'

const store = configureStore({
    reducer: {
        repositories: repositoriesReducer
    }
})

export default store
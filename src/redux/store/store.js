import { configureStore } from '@reduxjs/toolkit'
import repositoriesReducer from '../slices/githubSlices'
import oauthReducer from '../slices/oAuthslices'

const store = configureStore({
    reducer: {
        oauth: oauthReducer,
        repositories: repositoriesReducer
    }
})

export default store
import { createSlice } from "@reduxjs/toolkit"

// this is the initial state of 
// action
export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    proxy_url: process.env.REACT_APP_PROXY_URL
}


// slices to manage actions and change the state
// for the github OAUth 
const oauthSlices = createSlice({
    name: "repositories",
    initialState,
    reducers: {
        
        Login: (state, action) => {
            localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user
            }
        },

        Logout: (state) => {
            localStorage.clear()
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
    }


})

// export default oauthSlices.reducer


const { actions, reducer } = oauthSlices

export const { Login, Logout } = actions

export default reducer





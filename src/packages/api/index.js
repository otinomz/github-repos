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


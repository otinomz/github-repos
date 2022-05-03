import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getToken = ()=> {
    const token = localStorage.getItem("token")

    if ((!token)) {
        throw new Error({
            message: "Failed to authenticate. Please try agaim"
        })
    }

    return token

}

export const removeToken = () => {
    localStorage.removeItem('token');
}

export const setToken = (respValue) => {
    localStorage.setItem('token', JSON.stringify(respValue));
}

// create action for the user Profile
export const fetchProfileAction = createAsyncThunk("profileList",
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
export const fetchRepositoriesAction = createAsyncThunk("repositoryList",
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


export const getName = async() =>  {
    
    
    axios
        .get("https://api.github.com/user",
          {
            headers: {

                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${getToken()}`,
            },
          }
         )
            .then(function (response) {
                
            })
            .catch(function (error) {
                console.log(error);
        })
    
}
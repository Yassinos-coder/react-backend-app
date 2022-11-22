import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const userData = createAsyncThunk('accounts/userData', async(username) => {
    return axios.get(`http://localhost:9000/getUserData/${username}`)
    .then((res) => {return res.data})
    .catch(err => {return err.data.message})
})


const Logged = createSlice({
    name: 'Auth',
    initialState : {
        islogged : false,
        userInfo: [],
        status: '',
        Error : ''
    },
    reducers:{
        loggedIN : (state,action) => {
            state.islogged = action.payload
        } 
    }, 
    extraReducers : {
        [userData.fulfilled]: (state, action) => {
            state.userInfo = action.payload
            state.status = "Accepted"
        },
        [userData.pending]: (state) => {
            state.status = "Pending"
        },
        [userData.rejected]: (state, action) => {
            state.userInfo = action.payload
            state.status = "Rejected"
        },
    }
})

export const {loggedIN} = Logged.actions
export default Logged.reducer
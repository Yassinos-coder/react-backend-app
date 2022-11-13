import { createSlice, } from '@reduxjs/toolkit'

const Logged = createSlice({
    name: 'Auth',
    initialState : {
        islogged : false
    },
    reducers:{
        loggedIN : (state,action) => {
            state.islogged = action.payload
            console.log(state.islogged)
        } 
    }, 
})

export const {loggedIN} = Logged.actions
export default Logged.reducer
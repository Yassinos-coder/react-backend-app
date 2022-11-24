import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const getTasks = createAsyncThunk('Tasks/getTasks', async () => {
    return axios.get(`http://localhost:9000/SendTasksList/${localStorage.userID}`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err.data.message
    } )
})

export const addTodo = createAsyncThunk('Tasks/addTodo', async ({userid, Task})=>{
    return axios.post(`http://localhost:9000/addTodoToTasks/${userid}` , Task)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})
})

export const deleteTodo = createAsyncThunk('Tasks/deleteTodo', async ({ userid ,taskToDelete})=> {
    return axios.delete(`http://localhost:9000/deleteTask/${userid}/${taskToDelete}`)
    .then((res) => {return res.data})
    .catch(err => {return err.data.message})
})

export const createAccount = createAsyncThunk('accounts/createAccount', async({accountInfo}) =>{
    return axios.post('http://localhost:9000/AddAccount', accountInfo)
    .then(res => {return res.data})
    .catch(err => {return err.data.message})

})

const TaskSlice = createSlice({
    name : "Tasks", 
    initialState : {
        tasks: [],
        status:"",
        Error: "",
    },
    reducers:{}, 
    extraReducers : {
        [getTasks.fulfilled]: (state, action ) => {
            state.tasks = action.payload
            state.status = "success"
        },
        [getTasks.rejected] : ( state, action ) => {
            state.Error = action.payload
            state.status = "Rejected"
        },
        [getTasks.pending] : ( state ) =>{
            state.status = "pending"
        },
        // Below Code for adding todo
        [addTodo.fulfilled]: (state, action) => {
            state.tasks = action.payload
            state.status = "Accepted"
        }, 
        [addTodo.pending]: (state) => {
            state.status = 'Pending...'
        },
        [addTodo.rejected]: (state, action) => {
            state.Error = action.payload
            state.status = "Rejected"
        },
        // Below Code for deleting Task 
        [deleteTodo.fulfilled]: (state, action) => {
            state.tasks = action.payload
            state.status = "Accepted"
        }, 
        [deleteTodo.pending]: (state) => {
            state.status = 'Pending...'
        },
        [deleteTodo.rejected]: (state, action) => {
            state.Error = action.payload
            state.status = "Rejected"
        },
        // Create Account API 

    }
})

export default TaskSlice.reducer
import {configureStore} from '@reduxjs/toolkit'
import TasksReducer from './reducer'

const Store = configureStore({
    reducer : {
        Tasks : TasksReducer
    }
})

export default Store
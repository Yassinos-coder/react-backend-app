import {configureStore} from '@reduxjs/toolkit'
import TasksReducer from './reducer'
import loggedinReducer from './loggedin-reducer'

const Store = configureStore({
    reducer : {
        Tasks : TasksReducer,
        Auth : loggedinReducer
    }
})

export default Store
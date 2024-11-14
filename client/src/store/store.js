// the store.js will create all the application state

import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice'



const store = configureStore({
    reducer : {
        auth : authReducer,  // this is root reducer
    },
});

export default store;
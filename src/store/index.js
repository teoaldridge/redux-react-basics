import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter'; 
import authReducer from './auth';


//Here, because you have multiple slices, 
//you create your reducer as an object (map of reducers)
//which contains keys which point to different reducers
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
});

export default store;

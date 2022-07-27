import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './taskSlice'


export default store= configureStore({
    reducer:{
        tasks:taskReducer
    },

});
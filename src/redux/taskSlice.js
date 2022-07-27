import { createSlice } from "@reduxjs/toolkit";


const  taskSlice=createSlice({
    name:'task1',
    id:321,
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            const newTask={
                id:action.payload.id,
                name:action.payload.name
            }
            state.push(newTask)
        },
        deleteTask:(state,action)=>{
            return state.filter((item)=>item.id !==action.payload.id)
        }
    }

})
export const {addTask,deleteTask}=taskSlice.actions;
export default taskSlice.reducer;
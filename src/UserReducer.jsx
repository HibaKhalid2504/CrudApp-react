import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSLice=createSlice({
    name: "users",
    initialState: userList,
    reducers:{
        addUser: (state,action)=>{
            state.push(action.payload)
        },
        updateUser: (state,action)=>{
            const{id,name,email}=action.payload;
            const userEdit= state.find(user=>user.id==id);
            if(userEdit){
                userEdit.name=name;
                userEdit.email=email;
            }
        },
        deleteUser: (state,action)=>{
            const{id,name,email}=action.payload;
            const userEdit= state.find(user=>user.id==id);
            if(userEdit){
                return state.filter( f => f.id !==id);
            }
        }
    }
})

export default userSLice.reducer;
export const {addUser,updateUser,deleteUser}=userSLice.actions;
import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice(
    {
        name:'auth',
        initialState:{
            UserData:null,
            status:false,
        },
        reducers:{
            login:(state,action)=>{
                state.status=true,
                state.UserData=action.payload.UserData;
            },
            logout:(state,action)=>{
                state.status=false,
                state.UserData=null;
            }

        }
    }

)
export const {login,logout}=authSlice.actions
export default authSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { StudentService } from '../../service/StudentService'
import { createAsyncThunk } from '@reduxjs/toolkit';
export const loginSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        password: '',
        isLogin: false,
        username: ''
    },
    reducers: {
        logout: state => {
            state.isLogin = false;

        },
        setUser:(state,action)=>{
            console.log(action)
            state.email=action.payload.email;
            state.isLogin=action.payload.password;
            state.username=action.payload.name;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            loginAsync.fulfilled, (state, action) => {
                console.log(action)
                state.isLogin = true;
                state.username = action.payload.name;
            }
        )
    }
})
export const loginAsync = createAsyncThunk('auth/login', async (data) => {
    try {
        const res = await StudentService.login(data);
        localStorage.setItem('user',JSON.stringify(res[0]))
        return res[0];
    } catch (error) {

    }

})
export const { login, logout,setUser } = loginSlice.actions
export default loginSlice.reducer;
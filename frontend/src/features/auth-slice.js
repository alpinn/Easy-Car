import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    role: null
}

export const LoginUser = createAsyncThunk("user/LoginUser", async(user, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email: user.email,
            password: user.password
        })
        return response.data;
    } catch (error) {
        if (error.response) {
          const message = error.response.data.msg;
          console.error(`Login error: ${message}`);
          return thunkAPI.rejectWithValue(message);
        } else {
          console.error(`Login error: ${error.message}`);
          return thunkAPI.rejectWithValue("Unknown error");
        }
      }
})

export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/me')
        // console.log(response.data)
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const forgetPassword = createAsyncThunk("user/forgetPassword", async(email, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/lupapassword', {
        email: email
      })
      return response.data;
    } catch (error) {
      if(error.response){
        const message = error.response.data.msg
        return thunkAPI.rejectWithValue(message);
      }
    }
})

export const resetPassword = createAsyncThunk("user/resetPassword", async({ newPassword, token }, thunkAPI) => {
    if (!token) {
        return thunkAPI.rejectWithValue("Token is required");
      }
      try {
        const response = await axios.post(`http://localhost:5000/reset-password/${token}`, {
          password: newPassword
        });
        if (response.status === 200) {
          return response.data;
        } else {
          return thunkAPI.rejectWithValue(`Error resetting password: ${response.statusText}`);
        }
      } catch (error) {
        if (error.response) {
          const message = error.response.data.msg;
          return thunkAPI.rejectWithValue(message);
        } else {
          return thunkAPI.rejectWithValue("Error resetting password");
        }
      }
})

export const LogOut = createAsyncThunk("user/LogOut", async() => {
   await axios.delete('http://localhost:5000/logout')
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        })

        //Get User Login
        builder.addCase(getMe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            
            if (action.payload.role === 'admin') {
              state.role = 'admin';
            } else {
              state.role = 'user';
            }
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        })

        //logout
        builder.addCase(LogOut.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LogOut.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = null;
        });
        builder.addCase(LogOut.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
        })

        // Forget Password
        builder.addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
        });
        builder.addCase(forgetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(forgetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    
        // Reset Password
        builder.addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = { ...state.user, password: action.payload };
            state.message = action.payload;
        });
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const {reset} = authSlice.actions;

export default authSlice.reducer;
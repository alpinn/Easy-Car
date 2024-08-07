import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    admin: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("LoginUser", async(user, thunkAPI) => {
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

export const LoginAdmin = createAsyncThunk("LoginAdmin", async(admin, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/admin/login', {
            email: admin.email,
            password: admin.password
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

export const getMe = createAsyncThunk("getMe", async(_, thunkAPI) => {
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

export const getMeAdmin = createAsyncThunk("getMeAdmin", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/admin/me')
        // console.log(response.data)
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const forgetPassword = createAsyncThunk("forgetPassword", async(email, thunkAPI) => {
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

export const resetPassword = createAsyncThunk("resetPassword", async({ newPassword, token }, thunkAPI) => {
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

export const LogOut = createAsyncThunk("LogOut", async(thunkAPI) => {
  try{
    const response = await axios.delete('http://localhost:5000/logout');
    console.log(response.data);
    // Clear both user and admin state
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    } else {
      return thunkAPI.rejectWithValue("Error logging out");
    }
  }
   
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

        builder.addCase(LoginAdmin.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LoginAdmin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.admin = action.payload;
        });
        builder.addCase(LoginAdmin.rejected, (state, action) => {
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
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })

        //Get Admin Login
        builder.addCase(getMeAdmin.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMeAdmin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.admin = action.payload;
        });
        builder.addCase(getMeAdmin.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })

        //logout
        builder.addCase(LogOut.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(LogOut.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = null;
            state.admin = null;
            state.message = action.payload;
        });
        builder.addCase(LogOut.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            state.user = null; // Reset user state
            state.admin = null; // Reset admin state
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
import { api } from "../../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "register",
  async (registerData, thunkAPI) => {
    try {
      const res = await api.post("/auth/register", registerData);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);


//for login
export const loginUser = createAsyncThunk(
  "login",
  async (loginData, thunkAPI) => {
    try {
      const res = await api.post("/auth/login", loginData);
      return res.data.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  }
);


//for logout
export const logoutUser = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
});


//for getting a user details
export const getUser = createAsyncThunk("getUser", async (_, thunkAPI) => {
  try {
    const res = await api.get("/auth/me");
    console.log(res);
    return thunkAPI.fulfillWithValue(res.data.user);
  } catch (error) {
    if (error.response && error.response.data.message) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
});


//for updating user
export const updateUser = createAsyncThunk("editUser", async (uData, thunkAPI) => {
  try {
    const res = await api.put("/auth/update", uData);
    console.log(res);
    return res.data.user;
  } catch (error) {
    console.log(error)
  }
})


export const forgotPassword = createAsyncThunk(
  "forgotPass",
  async (FData, thunkAPI) => {
    try {
      const res = await api.post("/auth/forgotPassword", FData);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);


export const resetPassword = createAsyncThunk(
  "resetPass",
  async (resetData, thunkAPI) => {
    try {
      const res = await api.post(
        `/auth/resetPassword/${resetData.resetToken}`,
        { password: resetData.password }
      );
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
     if (error.response && error.response.data.message) {
       return thunkAPI.rejectWithValue(null);
     }
     return thunkAPI.rejectWithValue(null);
    }
  }
);


export const changePassword = createAsyncThunk(
  "changePass",
  async (CData, thunkAPI) => {
    try {
      const res = await api.post("/auth/changePassword", CData);
       console.log(res.data);
       return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
       if (error.response && error.response.data.message) {
         return thunkAPI.rejectWithValue(null);
       }
       return thunkAPI.rejectWithValue(null);
    }
  }
);

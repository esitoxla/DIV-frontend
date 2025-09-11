import { api } from "../../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "register",
  async (registerData, thunkAPI) => {
    try {
      const res = await api.post("/register", registerData);
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
      const res = await api.post("/login", loginData);
      return res.data;
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
    const res = await api.post("/logout");
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
   const res = await api.get("/me");
   console.log(res)
    return thunkAPI.fulfillWithValue(res.data.user);
  } catch (error) {
     if (error.response && error.response.data.message) {
       return thunkAPI.rejectWithValue(error.response.data.message);
     }
  }
});


// for uploading profile pic
export const uploadProfile = createAsyncThunk("profile", async (file, thunkAPI) => {
    try {
        const formData = new FormData();
        formData.append("avatar", file);

        const res = await api.post("/upload", formData);
        return res.data;
        
    } catch (error) {
       if (error.response && error.response.data.message) {
         return thunkAPI.rejectWithValue(error.response.data.message);
       }


    }
})

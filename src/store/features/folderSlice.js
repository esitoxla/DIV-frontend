import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/axios";

// Fetch folders
export const fetchFolders = createAsyncThunk(
  "folders/fetchFolders",
  async (search = "", { rejectWithValue }) => {
    try {
      const { data } = await api.get(
        `/folders${search ? `?search=${search}` : ""}`
      );
      return data.folders;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch folders"
      );
    }
  }
);

// Add folder
export const addFolder = createAsyncThunk(
  "folders/addFolder",
  async ({ name }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/folders", { name });
      return data.folder;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add folder"
      );
    }
  }
);

export const deleteFolder = createAsyncThunk(
  "Folders/deleteFolder",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/folders/${id}`);
      return id; // return deleted folder id so we can remove it from state
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete folders"
      );
    }
  }
);

const folderSlice = createSlice({
  name: "folders",
  initialState: {
    folders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch folders
      .addCase(fetchFolders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFolders.fulfilled, (state, action) => {
        state.loading = false;
        state.folders = action.payload;
      })
      .addCase(fetchFolders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add folder
      .addCase(addFolder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFolder.fulfilled, (state, action) => {
        state.loading = false;
        state.folders.push(action.payload);
      })
      .addCase(addFolder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // delete folder
      .addCase(deleteFolder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFolder.fulfilled, (state, action) => {
        state.loading = false;
        // remove deleted folder from list, manually update the state.
        state.folders = state.folders.filter(
          (folder) => folder._id !== action.payload
        );
      })
      .addCase(deleteFolder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default folderSlice.reducer;

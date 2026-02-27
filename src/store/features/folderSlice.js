import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/axios";
import toast from "react-hot-toast";

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
  "folders/deleteFolder",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/folders/${id}`);

      return {
        folderId: id,
        message: data.message || "Folder deleted successfully",
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete folder"
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

      .addCase(deleteFolder.fulfilled, (state, action) => {
        const { folderId } = action.payload;

        // Remove the folder from state
        state.folders = state.folders.filter(
          (folder) => folder._id !== folderId
        );

        toast.success("Folder deleted successfully!");
      })
      .addCase(deleteFolder.rejected, (state, action) => {
        toast.error(action.payload);
      });
  },
});

export default folderSlice.reducer;

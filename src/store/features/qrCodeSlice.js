import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/axios";
import { deleteFolder } from "./folderSlice";


//add qrcode
export const addQrCode = createAsyncThunk(
  "qrCodes/addQrCode",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/qrCodes", payload);
      return data.qrCode; // backend sends { qrCode }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add QR code"
      );
    }
  }
);

export const fetchQrCodes = createAsyncThunk(
  "qrCodes/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/qrCodes"); // no vendorId needed, backend gets it from token
      return data.qrCodes;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch QR codes"
      );
    }
  }
);

export const deleteQrcode = createAsyncThunk(
  "Qrcode/deleteQrcode",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/qrCodes/${id}`);
      return id; // return deleted qrcode id so we can remove it from state
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete Qr codes"
      );
    }
  }
);

export const updateQrcode = createAsyncThunk(
  "Qrcode/updateQrcode",
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/qrCodes/${id}`, updateData);
      console.log(data.qr)
      return data.qr; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update Qr codes"
      );
    }
  }
);

const qrCodeSlice = createSlice({
  name: "qrCodes",
  initialState: {
    qrCodes: [], // store generated codes
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addQrCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addQrCode.fulfilled, (state, action) => {
        state.loading = false;
        state.qrCodes.push(action.payload);
      })
      .addCase(addQrCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetch vendor qrcodes
      .addCase(fetchQrCodes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQrCodes.fulfilled, (state, action) => {
        state.loading = false;
        state.qrCodes = action.payload;
      })
      .addCase(fetchQrCodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteQrcode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteQrcode.fulfilled, (state, action) => {
        state.loading = false;
        // remove deleted qrcode from list, manually update the state.
        state.qrCodes = state.qrCodes.filter(
          (qrCode) => qrCode._id !== action.payload
        );
      })
      .addCase(deleteQrcode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update QR Code (toggle active/inactive)
      .addCase(updateQrcode.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQrcode.fulfilled, (state, action) => {
        state.loading = false;
        const updatedQr = action.payload;
        const index = state.qrCodes.findIndex((qr) => qr._id === updatedQr._id);
        if (index !== -1) {
          state.qrCodes[index] = updatedQr; // replace updated QR in state
        }
      })
      .addCase(updateQrcode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteFolder.fulfilled, (state, action) => {
        const { folderId } = action.payload;
        state.qrCodes = state.qrCodes.filter((qr) => qr.folderId !== folderId);
      });

  },
});

export default qrCodeSlice.reducer;

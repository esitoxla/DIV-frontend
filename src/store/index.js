import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/features/authSlice";
import folderReducer from "../store/features/folderSlice";
import qrCodeReducer from "../store/features/qrCodeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    folders: folderReducer,
    qrCodes: qrCodeReducer,
  },
});

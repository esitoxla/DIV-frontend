import React, { useState } from "react";
import profile from "../assets/images/profile.1.png";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../config/axios";
import { setUser } from "../store/features/authSlice";
import toast from "react-hot-toast";


export default function ProfileUpload() {
  const dispatch = useDispatch()

    const [preview, setPreview] = useState(null);
    const [ file, setFile] = useState(null)
    const { user, loading, message } = useSelector((state) => state.auth);

    const handleFileChange = async (e) => {
      const selectedFile = e.target.files[0];
     

      if (selectedFile) {
        setFile(selectedFile);

        // preview in UI
        setPreview(URL.createObjectURL(selectedFile));

        // prepare formData
        const formData = new FormData();
        formData.append("avatar", selectedFile);

        try {
          const res = await api.post("/auth/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(res.data.user);
          dispatch(setUser(res.data.user))
          toast.success("Profile upload success")
          // you could dispatch Redux action here if needed
        } catch (error) {
          console.error(error);
        }
      }
    };

    const triggerFileInput = () => {
      document.getElementById("avatarInput").click();
    };

    if (message) return <div>{message}</div>


  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-gray-300">
        <img
          src={
            user?.profilePicture
              ? `http://localhost:8040/${user.profilePicture}`
              : profile
          }
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <input
        id="avatarInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        onClick={triggerFileInput}
        disabled={loading}
        className="px-3 py-2 text-[#223962] hover:bg-blue-900 hover:text-white font-medium rounded-md hover:text-sm cursor-pointer"
      >
        Upload Picture
      </button>
    </div>
  );
}

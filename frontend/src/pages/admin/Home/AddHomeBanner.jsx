import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { Upload, X, ImageIcon, Check } from "lucide-react";
import ImageUploader from "../../../../components/admin/ImageUploader";

const AddHomeBanner = () => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [previewUrls, setPreviewUrls] = useState([]);
//   const [isDragOver, setIsDragOver] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadSuccess, setUploadSuccess] = useState(false);
//   const [uploadError, setUploadError] = useState(null);

//   const fileInputRef = useRef(null);

//   // Clean up object URLs on unmount or when previews change
//   useEffect(() => {
//     return () => {
//       previewUrls.forEach(url => URL.revokeObjectURL(url));
//     };
//   }, [previewUrls]);

//   const handleImageChange = (files) => {
//     const validImages = Array.from(files).filter(file =>
//       file.type.startsWith("image/")
//     );

//     const availableSlots = 3 - selectedImages.length;
//     if (availableSlots <= 0) return; // max limit reached

//     const newImages = validImages.slice(0, availableSlots);
//     const newPreviews = newImages.map(file => URL.createObjectURL(file));

//     setSelectedImages(prev => [...prev, ...newImages]);
//     setPreviewUrls(prev => [...prev, ...newPreviews]);
//     setUploadSuccess(false);
//     setUploadError(null);
//   };

//   const handleFileInputChange = (e) => {
//     const files = e.target.files;
//     if (files) handleImageChange(files);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragOver(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragOver(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragOver(false);
//     const files = e.dataTransfer.files;
//     if (files) handleImageChange(files);
//   };

//   const handleRemoveImage = (index) => {
//     URL.revokeObjectURL(previewUrls[index]); // cleanup URL

//     setSelectedImages(prev => {
//       const newImages = [...prev];
//       newImages.splice(index, 1);
//       return newImages;
//     });

//     setPreviewUrls(prev => {
//       const newPreviews = [...prev];
//       newPreviews.splice(index, 1);
//       return newPreviews;
//     });

//     setUploadSuccess(false);
//     setUploadError(null);

//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (selectedImages.length === 0) return;

//   setIsUploading(true);
//   setUploadSuccess(false);
//   setUploadError(null);

//   const formData = new FormData();
  
//   // Append each image with the correct key expected by the backend
//   selectedImages.forEach((image, index) => {
//     const key = `image${index + 1}`; // image1, image2, image3
//     formData.append(key, image);
//   });

//   try {
//     const response = await axios.post("/api/home/uploadBannerImages", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     console.log("Upload success:", response.data);

//     setIsUploading(false);
//     setUploadSuccess(true);
//   } catch (error) {
//     console.error("Upload failed:", error);
//     setUploadError("Upload failed. Please try again.");
//     setIsUploading(false);
//   }
// };


//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

 const handleUploadSuccess = (data) => {
    console.log("Upload response:", data);
  };

  return (
    <ImageUploader
      title="Upload Home Banner Images"
      maxImages={3}
      uploadUrl="/api/home/uploadBannerImages"
      onUploadSuccess={handleUploadSuccess}
      inputName="image"
    />
  )
};

export default AddHomeBanner;

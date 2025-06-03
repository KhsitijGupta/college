import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Upload, X, ImageIcon, Check } from "lucide-react";

const ImageUploader = ({
  title = "Upload Images",
  maxImages ,
  uploadUrl,
  onUploadSuccess,
  inputName = "image",
}) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleImageChange = (files) => {
    const validImages = Array.from(files).filter(file =>
      file.type.startsWith("image/")
    );
    const availableSlots = maxImages - selectedImages.length;
    if (availableSlots <= 0) return;
    const newImages = validImages.slice(0, availableSlots);
    const newPreviews = newImages.map(file => URL.createObjectURL(file));
    setSelectedImages(prev => [...prev, ...newImages]);
    setPreviewUrls(prev => [...prev, ...newPreviews]);
    setUploadSuccess(false);
    setUploadError(null);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files) handleImageChange(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) handleImageChange(e.dataTransfer.files);
  };

  const handleRemoveImage = (index) => {
    URL.revokeObjectURL(previewUrls[index]);
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    setUploadSuccess(false);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedImages.length === 0 || isUploading) return;

    setIsUploading(true);
    setUploadSuccess(false);
    setUploadError(null);

  const formData = new FormData();
    console.log(selectedImages.length)
  if (selectedImages.length === 1) {
    // For single image, use fixed field name
    formData.append(inputName, selectedImages[0]);
    console.log(formData)
  } else {
    // For multiple images, append with index (inputName1, inputName2, etc.)
    selectedImages.forEach((image, index) => {
      formData.append(`${inputName}${index + 1}`, image);
    });
  }

    try {
      // debugger;
      console.log(uploadUrl)
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setIsUploading(false);
      setUploadSuccess(true);
      console.log(response)
      onUploadSuccess?.(response.data); // call external success handler
    } catch (error) {
      setUploadError("Upload failed. Please try again.");
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <ImageIcon className="h-5 w-5 text-blue-600" />
          </div>
          {title} (Max {maxImages})
        </h2>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ease-in-out ${
              isDragOver
                ? "border-blue-400 bg-blue-50 scale-[1.02]"
                : selectedImages.length
                ? "border-gray-300 bg-gray-50"
                : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
            }`}
          >
            <input
              ref={fileInputRef}
              name={inputName}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileInputChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={selectedImages.length >= maxImages}
            />
            {selectedImages.length === 0 ? (
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-sm">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Drop your images here, or{" "}
                    <span className="text-blue-600 underline decoration-2 underline-offset-2">browse</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Supports JPG, PNG, GIF — Max {maxImages} images</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedImages.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={previewUrls[index]}
                      alt={`Preview ${index + 1}`}
                      className="max-h-64 w-full object-contain rounded-lg shadow-md border border-gray-200"
                    />
                    <button
                      type="button"
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      onClick={() => handleRemoveImage(index)}
                      aria-label="Remove image"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="mt-2 text-sm text-gray-600 text-left">
                      <p className="font-medium truncate">{img.name}</p>
                      <p className="text-xs">{formatFileSize(img.size)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {uploadError && <p className="text-red-500 mt-2 text-center">{uploadError}</p>}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={selectedImages.length === 0 || isUploading || uploadSuccess}
              className={`min-w-32 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                selectedImages.length === 0 || isUploading || uploadSuccess
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                  Uploading...
                </>
              ) : uploadSuccess ? (
                <>
                  <Check className="h-4 w-4" />
                  Uploaded
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Upload Images
                </>
              )}
            </button>
          </div>

          {uploadSuccess && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <p className="ml-3 text-green-700 font-medium">
                  Images uploaded successfully!
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ImageUploader;

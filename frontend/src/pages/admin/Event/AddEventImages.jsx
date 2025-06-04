import React from 'react';
import ImageUploader from '../../../../components/admin/ImageUploader';

const AddEventImages = () => {
 const handleUploadSuccess = (data) => {
    console.log("Upload response:", data);
  };

  return (
    <ImageUploader
      title="Upload Events Images"
      maxImages={10}
      uploadUrl="/api/event/uploadEventImages"
      onUploadSuccess={handleUploadSuccess}
      inputName="image"
    />
  )
};

export default AddEventImages;
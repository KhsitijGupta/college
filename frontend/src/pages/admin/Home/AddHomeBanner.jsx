import ImageUploader from "../../../../components/admin/ImageUploader";

const AddHomeBanner = () => {


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

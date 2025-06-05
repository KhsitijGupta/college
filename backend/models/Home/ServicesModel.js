import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Program title is required"],
      trim: true,
    },
    duration: {
      type: String,
      required: [true, "Program duration is required"],
    },
    image: {
      type: String,
    },
    highlights: {
      type: [String],
      default: [
                "Integrated Programs",
                "Liberal Arts Foundation",
                "Comprehensive Legal Training",
                ],
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Program || mongoose.model("Program", programSchema);

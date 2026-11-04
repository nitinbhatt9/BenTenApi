import mongoose, { Schema } from "mongoose";

const omni = new Schema(
  {
    name: { type: String, unique: true, trim: true },
    species: { type: String, unique: true, trim: true },
    homeWorld: { type: String, required: true, trim: true, unique: true },
    abilities: { type: String, required: true, trim: true, unique: true },
    series: { type: String, required: true, trim: true, unique: true },
    body: { type: String, required: true, trim: true, unique: true },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  },
);

const omnitrix = mongoose.model("alienData", omni);
export default omnitrix;

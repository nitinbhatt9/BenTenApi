import omnitrix from "../schema/omnitrix.schema.js";
import { uploadFileToImage } from "../service/storage.js";

export const omnitrixs = async (req, res) => {
  try {
    const { name, species, homeWorld, abilities, series, body } = req.body;
    const FileUpload = req.file;

    if (!name || !species) {
      return res.status(400).json({ message: "missing data" });
    }

    if (!FileUpload) {
      return res.status(400).json({ message: "missing image file" });
    }
    const isAlienExists = await omnitrix.findOne({ name, species });
    if (isAlienExists) {
      return res.status(400).json({ message: "alien data already exists" });
    }
    // image
    const uploadfile = await uploadFileToImage(
      FileUpload.buffer,
      FileUpload.originalname,
    );
    const newUser = new omnitrix({
      name,
      species,
      homeWorld,
      abilities,
      series,
      body,
      image: uploadfile.url,
    });

    await newUser.save();
    res.status(200).json({ message: "all aliens succesfully added" });
  } catch (error) {
    console.log("data error", error);
    return res.status(500).json({ message: "internal server error", error });
  }
};

export const getomnitrixs = async (req, res) => {
  try {
    const allAlines = await omnitrix.find();
    return res.status(200).json({
      success: true,
      totalCharacters: allAlines.length,
      message: "allAlines Arrived",
      Data: allAlines,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

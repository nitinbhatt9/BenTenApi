import express from "express";
import dotenv from "dotenv";
import alien_dataX from "./config/database.js";
import Alien from "./route/omnitrix.route.js";
import dns from "node:dns/promises";
import cors from "cors";

dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const port = process.env.PORT || 3002;
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());

alien_dataX();

app.get("/", (req, res) => {
  res.json({ message: "Omnitrix successor" });
});

app.use("/api/v1/aliendata", Alien);

app.listen(port, () => {
  console.log(`Server Is Running On Port http://localhost:${port}`);
});

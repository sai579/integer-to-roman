import express from "express";
import cors from 'cors';
import indexRoutes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/", indexRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
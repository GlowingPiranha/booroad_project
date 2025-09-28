import express from "express";
import cors from "cors";
import participantsRouter from "./routes/participantsRouter.js";
import tripRouter from "./routes/tripRouter.js";
import contactRouter from "./routes/contactRouter.js";

const app = express();
const PORT = 3001; // diverso da React (3000)

app.use(cors()); // permette al frontend di fare richieste
app.use(express.json());

app.use("/api/participants", participantsRouter);
app.use("/api/trips", tripRouter);
app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});

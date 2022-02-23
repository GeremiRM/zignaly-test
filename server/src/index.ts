import express from "express";
import "dotenv/config";
import cors from "cors";

import routes from "./routes";

// Port
const PORT = process.env.PORT || 4000;

const __main__ = () => {
  const app = express();

  // Middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  // Routes
  routes(app);

  app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
  });
};

__main__();

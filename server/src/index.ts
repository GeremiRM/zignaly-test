import express from "express";
import "dotenv/config";

const __main__ = () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

__main__();

import { Express } from "express";
import { getAllPhones, getPhoneById } from "./controllers/phones.controllers";

const routes = (app: Express) => {
  app.get("/phones", getAllPhones);

  app.get("/phones/:id", getPhoneById);
};

export default routes;

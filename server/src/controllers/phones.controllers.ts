import { Request, Response } from "express";
import data from "../data.json";

const getAllPhones = (_req: Request, res: Response) => {
  try {
    res.send(data).json(200);
  } catch (e) {
    res.sendStatus(404);
  }
};

const getPhoneById = (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;

    const phone = data.find((phone) => phone.id === parseInt(id));

    if (!phone) {
      throw Error;
    }

    res.send(phone).status(200);
  } catch (e) {
    res.sendStatus(404);
  }
};

export { getAllPhones, getPhoneById };

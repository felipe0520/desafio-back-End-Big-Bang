import { Request, Response } from "express";
import { CityBusiness } from "../business/businessController";

export class CityController {
  public async getCity(req: Request, res: Response) {
    try {
      const city = req.body.city;
      const lon = req.body.lon;
      const lat = req.body.lat;

      const playlist = await new CityBusiness().getCity({ city, lon, lat });

      res.status(200).send(playlist);
    } catch (error) {
      res.status(400).send({ messsage: error.message });
    }
  }
}

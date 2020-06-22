import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export class CityDataBase {
  static BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";

  public async getCityCoordinates(coordinates: coordinatesType) {
    const response = await axios.get(
      `${CityDataBase.BASE_URL}lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.apiId}`
    );
    return response.data.main.temp;
  }

  public async getCityName(name: string) {
    const response = await axios.get(
      `${CityDataBase.BASE_URL}q=${name}&appid=${process.env.apiId}`
    );
    return response.data.main.temp;
  }
}

type coordinatesType = {
  lat: number;
  lon: number;
};

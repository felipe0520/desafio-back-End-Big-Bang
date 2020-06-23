import axios from "axios";

export class CityDataService {
  static BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";

  public async getCityCoordinates(coordinates: coordinatesType) {
    const response = await axios.get(
      `${CityDataService.BASE_URL}lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.apiId}`
    );
    return response.data.main.temp;
  }

  public async getCityName(name: string) {
    const response = await axios.get(
      `${CityDataService.BASE_URL}q=${name}&appid=${process.env.apiId}`
    );
    return response.data.main.temp;
  }
}

export type coordinatesType = {
  lat: number;
  lon: number;
};

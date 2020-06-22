import { CityType } from "./typeBusiness";
import { verifyCityData, verifyMusicToTemp } from "./verifyBusiness";
import { CityDataBase } from "../data/cityDataBase";

export class CityBusiness {
  public async getCity(cityData: CityType) {
    verifyCityData(cityData);
    const coordinates = { lat: cityData.lat, lon: cityData.lon };

    let tempKelvin;

    if (cityData.city) {
      tempKelvin = await new CityDataBase().getCityName(cityData.city);
    }

    if (coordinates.lat && coordinates.lon) {
      tempKelvin = await new CityDataBase().getCityCoordinates(coordinates);
    }

    const response = verifyMusicToTemp(tempKelvin);

    return response;
  }
}

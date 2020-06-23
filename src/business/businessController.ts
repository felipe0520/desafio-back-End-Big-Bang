import { CityType } from "./typeBusiness";
import {
  verifyCityData,
  verifyMusicToTemp,
  verifyPropertyIsEmpty,
  verifyPropertyIsNumber,
  verifyPropertyIsString,
} from "./verifyBusiness";
import { CityDataService, coordinatesType } from "../services/cityServices";
import { SpotifyServices } from "../services/spotifyServices";

export class CityBusiness {
  public async getMusics(cityData: CityType) {
    verifyCityData(cityData);

    const coordinates = { lat: cityData.lat, lon: cityData.lon };

    let tempKelvin;

    if (!coordinates.lat && !coordinates.lon) {
      verifyPropertyIsString(cityData.city);
      tempKelvin = await new CityDataService().getCityName(
        cityData.city as string
      );
    }

    if (!tempKelvin) {
      verifyPropertyIsNumber(coordinates.lat);
      verifyPropertyIsNumber(coordinates.lon);
      tempKelvin = await new CityDataService().getCityCoordinates(
        coordinates as coordinatesType
      );
    }

    verifyPropertyIsNumber(tempKelvin);

    const musicalGenre = verifyMusicToTemp(tempKelvin);

    const spotifyDataServices = new SpotifyServices();

    await spotifyDataServices.config();

    const result = await spotifyDataServices.getMusics(musicalGenre as string);

    verifyPropertyIsEmpty(result);

    return {
      Genre: musicalGenre,
      music: result,
    };
  }
}

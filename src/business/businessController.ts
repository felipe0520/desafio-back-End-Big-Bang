import { CityType } from "./typeBusiness";
import { verifyCityData, verifyMusicToTemp } from "./verifyBusiness";
import { CityDataService } from "../services/cityServices";
import { SpotifyServices } from "../services/spotifyServices";

export class CityBusiness {
  public async getCity(cityData: CityType) {
    verifyCityData(cityData);

    const coordinates = { lat: cityData.lat, lon: cityData.lon };

    let tempKelvin;

    if (cityData.city) {
      tempKelvin = await new CityDataService().getCityName(cityData.city);
    }

    if (coordinates.lat && coordinates.lon) {
      tempKelvin = await new CityDataService().getCityCoordinates(coordinates);
    }

    const musicalGenre = verifyMusicToTemp(tempKelvin);

    const spotifyDataServices = new SpotifyServices();

    await spotifyDataServices.config();

    const result = await spotifyDataServices.getMusic(musicalGenre as string);

    return {
      Genre: musicalGenre,
      music: result,
    };
  }
}

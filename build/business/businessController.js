"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityBusiness = void 0;
const verifyBusiness_1 = require("./verifyBusiness");
const cityServices_1 = require("../services/cityServices");
const spotifyServices_1 = require("../services/spotifyServices");
class CityBusiness {
    getCity(cityData) {
        return __awaiter(this, void 0, void 0, function* () {
            verifyBusiness_1.verifyCityData(cityData);
            const coordinates = { lat: cityData.lat, lon: cityData.lon };
            let tempKelvin;
            if (cityData.city) {
                tempKelvin = yield new cityServices_1.CityDataService().getCityName(cityData.city);
            }
            if (coordinates.lat && coordinates.lon) {
                tempKelvin = yield new cityServices_1.CityDataService().getCityCoordinates(coordinates);
            }
            const musicalGenre = verifyBusiness_1.verifyMusicToTemp(tempKelvin);
            const spotifyDataServices = new spotifyServices_1.SpotifyServices();
            yield spotifyDataServices.config();
            const result = yield spotifyDataServices.getMusic(musicalGenre);
            return {
                Genre: musicalGenre,
                music: result,
            };
        });
    }
}
exports.CityBusiness = CityBusiness;

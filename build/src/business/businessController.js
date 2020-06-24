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
    getMusics(cityData) {
        return __awaiter(this, void 0, void 0, function* () {
            verifyBusiness_1.verifyCityData(cityData);
            const coordinates = { lat: cityData.lat, lon: cityData.lon };
            let tempKelvin;
            if (!coordinates.lat && !coordinates.lon) {
                verifyBusiness_1.verifyPropertyIsString(cityData.city);
                tempKelvin = yield new cityServices_1.CityDataService().getCityName(cityData.city);
            }
            if (!tempKelvin) {
                verifyBusiness_1.verifyPropertyIsNumber(coordinates.lat);
                verifyBusiness_1.verifyPropertyIsNumber(coordinates.lon);
                tempKelvin = yield new cityServices_1.CityDataService().getCityCoordinates(coordinates);
            }
            verifyBusiness_1.verifyPropertyIsNumber(tempKelvin);
            const musicalGenre = verifyBusiness_1.verifyGenreToTemp(tempKelvin);
            verifyBusiness_1.verifyPropertyIsString(musicalGenre);
            const spotifyDataServices = new spotifyServices_1.SpotifyServices();
            yield spotifyDataServices.config();
            const result = yield spotifyDataServices.getMusics(musicalGenre);
            verifyBusiness_1.verifyPropertyIsEmpty(result);
            return {
                Genre: musicalGenre,
                music: result,
            };
        });
    }
}
exports.CityBusiness = CityBusiness;

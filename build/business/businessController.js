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
const cityDataBase_1 = require("../data/cityDataBase");
class CityBusiness {
    getCity(cityData) {
        return __awaiter(this, void 0, void 0, function* () {
            verifyBusiness_1.verifyCityData(cityData);
            const coordinates = { lat: cityData.lat, lon: cityData.lon };
            let tempKelvin;
            if (cityData.city) {
                tempKelvin = yield new cityDataBase_1.CityDataBase().getCityName(cityData.city);
            }
            if (coordinates.lat && coordinates.lon) {
                tempKelvin = yield new cityDataBase_1.CityDataBase().getCityCoordinates(coordinates);
            }
            const response = verifyBusiness_1.verifyMusicToTemp(tempKelvin);
            return response;
        });
    }
}
exports.CityBusiness = CityBusiness;

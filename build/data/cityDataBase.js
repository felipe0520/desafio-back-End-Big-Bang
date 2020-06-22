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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityDataBase = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class CityDataBase {
    getCityCoordinates(coordinates) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${CityDataBase.BASE_URL}lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.apiId}`);
            return response.data.main.temp;
        });
    }
    getCityName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${CityDataBase.BASE_URL}q=${name}&appid=${process.env.apiId}`);
            return response.data.main.temp;
        });
    }
}
exports.CityDataBase = CityDataBase;
CityDataBase.BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";

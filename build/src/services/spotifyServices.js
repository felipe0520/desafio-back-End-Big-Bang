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
exports.SpotifyServices = void 0;
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
class SpotifyServices {
    constructor() {
        this.api = new spotify_web_api_node_1.default({
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
        });
    }
    config() {
        return __awaiter(this, void 0, void 0, function* () {
            const credential = yield this.api.clientCredentialsGrant();
            this.api.setAccessToken(credential.body.access_token);
        });
    }
    getMusics(name) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.searchTracks(`'playlist : ${name}'`);
            const data = (_a = response.body.tracks) === null || _a === void 0 ? void 0 : _a.items;
            const music = data === null || data === void 0 ? void 0 : data.map((el) => {
                return { name: el.name };
            });
            return music;
        });
    }
}
exports.SpotifyServices = SpotifyServices;

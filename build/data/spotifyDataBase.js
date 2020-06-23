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
exports.SpotifyDataBase = void 0;
const spotify_web_api_node_1 = __importDefault(require("spotify-web-api-node"));
class SpotifyDataBase {
    spotifyWebApi() {
        const credenciais = {
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
        };
        return new spotify_web_api_node_1.default(credenciais);
    }
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.spotifyWebApi().clientCredentialsGrant();
            return response.body.access_token;
        });
    }
    saveToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.spotifyWebApi().setAccessToken(token);
            const response = this.spotifyWebApi().getAccessToken();
            console.log(response);
        });
    }
    getMusic() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.spotifyWebApi().getAccessToken();
        });
    }
}
exports.SpotifyDataBase = SpotifyDataBase;

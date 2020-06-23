"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPropertyIsEmpty = exports.verifyMusicToTemp = exports.verifyCityData = void 0;
exports.verifyCityData = (cityData) => {
    if (!cityData.city && (!cityData.lat || !cityData.lon)) {
        throw new Error("Invalid input");
    }
    return true;
};
exports.verifyMusicToTemp = (tempKelvin) => {
    const temp = Number((tempKelvin - 273).toFixed(1));
    if (temp > 30) {
        return "fest music";
    }
    if (temp >= 15) {
        return "pop music";
    }
    if (temp >= 10) {
        return "rock music";
    }
    if (temp < 10) {
        return "classic music";
    }
};
exports.verifyPropertyIsEmpty = (property) => {
    if (!property) {
        throw new Error("Invalid Input");
    }
};

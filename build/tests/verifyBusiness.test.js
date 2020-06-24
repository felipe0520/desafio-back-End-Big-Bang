"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyBusiness_1 = require("../src/business/verifyBusiness");
describe("testing function verify", () => {
    test("testing verifyGenreToTemp", () => {
        const veryLowTemp = 0 + 273;
        const lowTemp = 10 + 273;
        const roomTemp = 25 + 273;
        const highTemp = 35 + 273;
        const testVeryLow = verifyBusiness_1.verifyGenreToTemp(veryLowTemp);
        const testLow = verifyBusiness_1.verifyGenreToTemp(lowTemp);
        const testRoom = verifyBusiness_1.verifyGenreToTemp(roomTemp);
        const testHigh = verifyBusiness_1.verifyGenreToTemp(highTemp);
        expect(testVeryLow).toBe("classic music");
        expect(testLow).toBe("rock music");
        expect(testRoom).toBe("pop music");
        expect(testHigh).toBe("fest music");
    });
    test("testing verifyCityData Empty", () => {
        const cityDataEmpty = { city: undefined, lon: undefined, lat: undefined };
        try {
            verifyBusiness_1.verifyCityData(cityDataEmpty);
        }
        catch (error) {
            expect(error.message).toBe("Invalid city Data");
        }
    });
    test("testing verifyCityData Invalid longitude ", () => {
        const cityDataIncomplet = { city: undefined, lon: undefined, lat: 15 };
        try {
            verifyBusiness_1.verifyCityData(cityDataIncomplet);
        }
        catch (error) {
            expect(error.message).toBe("Invalid city Data");
        }
    });
    test("testing verifyCityData Invalid latitude ", () => {
        const cityDataIncomplet = { city: undefined, lon: 20, lat: undefined };
        try {
            verifyBusiness_1.verifyCityData(cityDataIncomplet);
        }
        catch (error) {
            expect(error.message).toBe("Invalid city Data");
        }
    });
    test("testing verifyCityData valid city ", () => {
        const cityData = { city: "city", lon: undefined, lat: undefined };
        try {
            const testverifyCityData = verifyBusiness_1.verifyCityData(cityData);
            expect(testverifyCityData).toBe(true);
        }
        catch (error) { }
    });
    test("testing verifyCityData valid coordinates ", () => {
        const cityData = { city: undefined, lon: 10, lat: 50 };
        try {
            const testVerifyCityData = verifyBusiness_1.verifyCityData(cityData);
            expect(testVerifyCityData).toBe(true);
        }
        catch (error) { }
    });
    test("testing verifyPropertyIsNumber invalid coordinates ", () => {
        const coordinates = "20.8545;";
        try {
            verifyBusiness_1.verifyPropertyIsNumber(coordinates);
        }
        catch (error) {
            expect(error.message).toBe("Invalid input");
        }
    });
    test("testing verifyPropertyIsNumber valid coordinates ", () => {
        const coordinates = 20.8545;
        const testVerifyPropertyIsCoordinates = verifyBusiness_1.verifyPropertyIsNumber(coordinates);
        expect(testVerifyPropertyIsCoordinates).toBe(true);
    });
    test("testing verifyPropertyIsString invalid property ", () => {
        const invalidString = 452;
        try {
            verifyBusiness_1.verifyPropertyIsString(invalidString);
        }
        catch (error) {
            expect(error.message).toBe("Invalid input");
        }
    });
    test("testing verifyPropertyIsString valid property", () => {
        const validString = "string-test";
        const testverifyPropertyIsString = verifyBusiness_1.verifyPropertyIsString(validString);
        expect(testverifyPropertyIsString).toBe(true);
    });
    test("testing verifyPropertyIsEmpty invalid property ", () => {
        const invalidProperty = undefined;
        try {
            verifyBusiness_1.verifyPropertyIsEmpty(invalidProperty);
        }
        catch (error) {
            expect(error.message).toBe("Invalid Input");
        }
    });
    test("testing verifyPropertyIsString valid property", () => {
        const validProperty = "string-test";
        const testVerifyPropertyIsEmpty = verifyBusiness_1.verifyPropertyIsEmpty(validProperty);
        expect(testVerifyPropertyIsEmpty).toBe(true);
    });
});

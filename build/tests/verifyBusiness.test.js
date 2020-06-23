"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyBusiness_1 = require("../src/business/verifyBusiness");
describe("testing function verify", () => {
    test("testing verifyMusicToTemp", () => {
        const veryLowTemp = 0 + 273;
        const lowTemp = 10 + 273;
        const roomTemp = 25 + 273;
        const highTemp = 35 + 273;
        const testVeryLow = verifyBusiness_1.verifyMusicToTemp(veryLowTemp);
        const testLow = verifyBusiness_1.verifyMusicToTemp(lowTemp);
        const testRoom = verifyBusiness_1.verifyMusicToTemp(roomTemp);
        const testHigh = verifyBusiness_1.verifyMusicToTemp(highTemp);
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
            expect(error.message).toBe("Invalid input");
        }
    });
    test("testing verifyCityData Invalid longitude ", () => {
        const cityDataIncomplet = { city: undefined, lon: undefined, lat: 15 };
        try {
            verifyBusiness_1.verifyCityData(cityDataIncomplet);
        }
        catch (error) {
            expect(error.message).toBe("Invalid input");
        }
    });
    test("testing verifyCityData Invalid latitude ", () => {
        const cityDataIncomplet = { city: undefined, lon: 20, lat: undefined };
        try {
            verifyBusiness_1.verifyCityData(cityDataIncomplet);
        }
        catch (error) {
            expect(error.message).toBe("Invalid input");
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
            const testverifyCityData = verifyBusiness_1.verifyCityData(cityData);
            expect(testverifyCityData).toBe(true);
        }
        catch (error) { }
    });
});

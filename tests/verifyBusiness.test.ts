import {
  verifyMusicToTemp,
  verifyCityData,
  verifyPropertyIsNumber,
} from "../src/business/verifyBusiness";

describe("testing function verify", () => {
  test("testing verifyMusicToTemp", () => {
    const veryLowTemp = 0 + 273;
    const lowTemp = 10 + 273;
    const roomTemp = 25 + 273;
    const highTemp = 35 + 273;

    const testVeryLow = verifyMusicToTemp(veryLowTemp);
    const testLow = verifyMusicToTemp(lowTemp);
    const testRoom = verifyMusicToTemp(roomTemp);
    const testHigh = verifyMusicToTemp(highTemp);

    expect(testVeryLow).toBe("classic music");
    expect(testLow).toBe("rock music");
    expect(testRoom).toBe("pop music");
    expect(testHigh).toBe("fest music");
  });

  test("testing verifyCityData Empty", () => {
    const cityDataEmpty = { city: undefined, lon: undefined, lat: undefined };
    try {
      verifyCityData(cityDataEmpty);
    } catch (error) {
      expect(error.message).toBe("Invalid city Data");
    }
  });
  test("testing verifyCityData Invalid longitude ", () => {
    const cityDataIncomplet = { city: undefined, lon: undefined, lat: 15 };
    try {
      verifyCityData(cityDataIncomplet);
    } catch (error) {
      expect(error.message).toBe("Invalid city Data");
    }
  });
  test("testing verifyCityData Invalid latitude ", () => {
    const cityDataIncomplet = { city: undefined, lon: 20, lat: undefined };
    try {
      verifyCityData(cityDataIncomplet);
    } catch (error) {
      expect(error.message).toBe("Invalid city Data");
    }
  });
  test("testing verifyCityData valid city ", () => {
    const cityData = { city: "city", lon: undefined, lat: undefined };
    try {
      const testverifyCityData = verifyCityData(cityData);
      expect(testverifyCityData).toBe(true);
    } catch (error) {}
  });
  test("testing verifyCityData valid coordinates ", () => {
    const cityData = { city: undefined, lon: 10, lat: 50 };
    try {
      const testVerifyCityData = verifyCityData(cityData);
      expect(testVerifyCityData).toBe(true);
    } catch (error) {}
  });

  test("testing verifyPropertyIsCoordinates invalid coordinates ", () => {
    const coordinates = "20.8545;";
    try {
      verifyPropertyIsNumber(coordinates);
    } catch (error) {
      expect(error.message).toBe("Invalid input");
    }
  });
  test("testing verifyPropertyIsCoordinates valid coordinates ", () => {
    const coordinates = 20.8545;
    const testVerifyPropertyIsCoordinates = verifyPropertyIsNumber(coordinates);
    expect(testVerifyPropertyIsCoordinates).toBe(true);
  });
});

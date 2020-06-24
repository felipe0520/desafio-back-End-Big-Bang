import {
  verifyGenreToTemp,
  verifyCityData,
  verifyPropertyIsNumber,
  verifyPropertyIsString,
  verifyPropertyIsEmpty,
} from "../src/business/verifyBusiness";

describe("testing function verify", () => {
  test("testing verifyGenreToTemp", () => {
    const veryLowTemp = 0 + 273;
    const lowTemp = 10 + 273;
    const roomTemp = 25 + 273;
    const highTemp = 35 + 273;

    const testVeryLow = verifyGenreToTemp(veryLowTemp);
    const testLow = verifyGenreToTemp(lowTemp);
    const testRoom = verifyGenreToTemp(roomTemp);
    const testHigh = verifyGenreToTemp(highTemp);

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

  test("testing verifyPropertyIsNumber invalid coordinates ", () => {
    const coordinates = "20.8545;";
    try {
      verifyPropertyIsNumber(coordinates);
    } catch (error) {
      expect(error.message).toBe("Invalid input");
    }
  });

  test("testing verifyPropertyIsNumber valid coordinates ", () => {
    const coordinates = 20.8545;
    const testVerifyPropertyIsCoordinates = verifyPropertyIsNumber(coordinates);
    expect(testVerifyPropertyIsCoordinates).toBe(true);
  });

  test("testing verifyPropertyIsString invalid property ", () => {
    const invalidString = 452;
    try {
      verifyPropertyIsString(invalidString);
    } catch (error) {
      expect(error.message).toBe("Invalid input");
    }
  });

  test("testing verifyPropertyIsString valid property", () => {
    const validString = "string-test";
    const testverifyPropertyIsString = verifyPropertyIsString(validString);
    expect(testverifyPropertyIsString).toBe(true);
  });

  test("testing verifyPropertyIsEmpty invalid property ", () => {
    const invalidProperty = undefined;
    try {
      verifyPropertyIsEmpty(invalidProperty);
    } catch (error) {
      expect(error.message).toBe("Invalid Input");
    }
  });

  test("testing verifyPropertyIsString valid property", () => {
    const validProperty = "string-test";
    const testVerifyPropertyIsEmpty = verifyPropertyIsEmpty(validProperty);
    expect(testVerifyPropertyIsEmpty).toBe(true);
  });
});

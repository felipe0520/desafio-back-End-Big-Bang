import { CityType } from "./typeBusiness";

export const verifyCityData = (cityData: CityType) => {
  if (!cityData.city && (!cityData.lat || !cityData.lon)) {
    throw new Error("Invalid input");
  }
};

export const verifyMusicToTemp = (tempKelvin: number) => {
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

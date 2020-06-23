import { CityType } from "./typeBusiness";

export const verifyCityData = (cityData: CityType) => {
  if (!cityData.city && (!cityData.lat || !cityData.lon)) {
    throw new Error("Invalid city Data");
  }
  return true;
};

export const verifyPropertyIsEmpty = (property: any) => {
  if (!property) {
    throw new Error("Invalid Input");
  }
};

export const verifyPropertyIsNumber = (property: any) => {
  if (typeof property !== "number") {
    throw new Error("Invalid input");
  }
  return true;
};

export const verifyPropertyIsString = (property: any) => {
  if (typeof property !== "string") {
    console.log("fui chamado");
    throw new Error("Invalid Invalid input");
  }
  return true;
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

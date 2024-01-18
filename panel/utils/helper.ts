export type ColorType = "red" | "green" | "blue" | "gray" | "black" | "purple";

export const getInputVariant = (color: ColorType) => {
  const colors: Record<ColorType, string> = {
    red: "focus:border-red-500 focus:ring-red-500",
    green: "focus:border-green-500 focus:ring-green-500",
    blue: "focus:border-blue-500 focus:ring-blue-500",
    gray: "focus:border-gray-500 focus:ring-gray-500",
    black: "focus:border-black focus:ring-black",
    purple: "focus:border-purple-500 focus:ring-purple-500",
  };
  return colors[color];
};

export const getButtonVariant = (color: ColorType) => {
  const colors: Record<ColorType, string> = {
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    gray: "bg-gray-500 hover:bg-gray-600",
    black: "bg-black hover:bg-black",
    purple: "bg-purple-500 hover:bg-purple-600",
  };
  return colors[color];
};

export const getTextColorVariant = (color: ColorType) => {
  const colors: Record<ColorType, string> = {
    red: "text-red-500",
    green: "text-green-500",
    blue: "text-blue-500",
    gray: "text-gray-500",
    black: "text-black-500",
    purple: "text-purple-500",
  };
  return colors[color];
};

export const generateRandomId = (length: number) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

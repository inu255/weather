import {
  WiAlien,
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiRain,
  WiRainMix,
  WiShowers,
  WiSnow,
} from "react-icons/wi";

type WeatherInfo = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

export const decodeWeatherCode = (code: number): WeatherInfo => {
  switch (code) {
    case 0:
      return { name: "Sunny", icon: <WiDaySunny />, color: "#FFE142" };
    case 1:
      return { name: "Mainly sunny", icon: <WiDaySunnyOvercast />, color: "#FFE142" };
    case 2:
      return { name: "Partly cloudy", icon: <WiDayCloudy />, color: "#adc3d2" };
    case 3:
      return { name: "Overcast", icon: <WiCloud />, color: "#adc3d2" };
    case 45:
    case 48:
      return { name: "Fog", icon: <WiDayFog />, color: "#adc3d2" };
    case 51:
    case 53:
    case 55:
      return { name: "Drizzle", icon: <WiRainMix />, color: "#42C6FF" };
    case 56:
    case 57:
      return { name: "Freezing drizzle", icon: <WiRainMix />, color: "#42C6FF" };
    case 61:
      return { name: "Slight rain", icon: <WiRainMix />, color: "#42C6FF" };
    case 63:
      return { name: "Moderate rain", icon: <WiRain />, color: "#42C6FF" };
    case 65:
      return { name: "Heavy rain", icon: <WiRain />, color: "#42C6FF" };
    case 66:
    case 67:
      return { name: "Freezing rain", icon: <WiRain />, color: "#42C6FF" };
    case 71:
      return { name: "Slight snow fall", icon: <WiSnow />, color: "#FF64D4" };
    case 73:
      return { name: "Moderate snow fall", icon: <WiSnow />, color: "#FF64D4" };
    case 75:
      return { name: "Heavy snow fall", icon: <WiSnow />, color: "#FF64D4" };
    case 77:
      return { name: "Snow grains", icon: <WiSnow />, color: "#FF64D4" };
    case 80:
      return { name: "Slight rain showers", icon: <WiShowers />, color: "#42C6FF" };
    case 81:
      return { name: "Moderate rain showers", icon: <WiShowers />, color: "#42C6FF" };
    case 82:
      return { name: "Heavy rain showers", icon: <WiShowers />, color: "#42C6FF" };
    case 85:
      return { name: "Slight snow showers", icon: <WiSnow />, color: "#FF64D4" };
    case 86:
      return { name: "Heavy snow showers", icon: <WiSnow />, color: "#FF64D4" };
    default:
      return { name: "Unknown weather code", icon: <WiAlien />, color: "white" };
  }
};

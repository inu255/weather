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

export function decodeWeatherString(code: number) {
  switch (code) {
    case 0:
      return "Sunny";
    case 1:
      return "Mainly sunny";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
    case 48:
      return "Fog";
    case 51:
    case 53:
    case 55:
      return "Drizzle";
    case 56:
    case 57:
      return "Freezing drizzle";
    case 61:
      return "Slight rain";
    case 63:
      return "Moderate rain";
    case 65:
      return "Heavy rain";
    case 66:
    case 67:
      return "Freezing rain";
    case 71:
      return "Slight snow fall";
    case 73:
      return "Moderate snow fall";
    case 75:
      return "Heavy snow fall";
    case 77:
      return "Snow grains";
    case 80:
      return "Slight rain showers";
    case 81:
      return "Moderate rain showers";
    case 82:
      return "Heavy rain showers";
    case 85:
      return "Slight snow showers";
    case 86:
      return "Heavy snow showers";
    default:
      return "Unknown weather code";
  }
}

export function decodeWeatherIcon(code: number) {
  switch (code) {
    case 0:
      return <WiDaySunny />;
    case 1:
      return <WiDaySunnyOvercast />;
    case 2:
      return <WiDayCloudy />;
    case 3:
      return <WiCloud />;
    case 45:
    case 48:
      return <WiDayFog />;
    case 51:
    case 53:
    case 55:
      return <WiRainMix />;
    case 56:
    case 57:
      return <WiRainMix />;
    case 61:
      return <WiRainMix />;
    case 63:
      return <WiRain />;
    case 65:
      return <WiRain />;
    case 66:
    case 67:
      return <WiRain />;
    case 71:
      return <WiSnow />;
    case 73:
      return <WiSnow />;
    case 75:
      return <WiSnow />;
    case 77:
      return <WiSnow />;
    case 80:
      return <WiShowers />;
    case 81:
      return <WiShowers />;
    case 82:
      return <WiShowers />;
    case 85:
      return <WiSnow />;
    case 86:
      return <WiSnow />;
    default:
      return <WiAlien />;
  }
}

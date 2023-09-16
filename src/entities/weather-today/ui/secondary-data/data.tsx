import { PiWaves } from "react-icons/pi";
import { IoWaterOutline, IoEyeOutline } from "react-icons/io5";

export function createSecondaryData(windSpeed: number, humidity: number, visibility: number) {
  return [
    { icon: <PiWaves />, value: windSpeed, name: "Wind", unit: "km/h", key: "1" },
    { icon: <IoWaterOutline />, value: humidity, name: "Humidity", unit: "%", key: "2" },
    { icon: <IoEyeOutline />, value: visibility, name: "Visibility", unit: "km", key: "3" },
  ];
}

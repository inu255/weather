import { createEvent, createStore } from "effector";
import { Coordinates } from "src/shared/model/types";

type Location = {
  cityName: string;
  latitude: number;
  longitude: number;
  isLoading: boolean;
  isError: boolean;
};

// const getCurrentPosition = () => {
//   navigator.geolocation.getCurrentPosition(
//     ({ coords }: { coords: Coordinates }) => {
//       setCoordinates({ latitude: coords.latitude, longitude: coords.longitude });
//     },
//     () => setCoordinatesError(),
//     {
//       // enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0,
//     }
//   );
// };

// export const getCurrentPositionWithPermission = () => {
//   if (navigator.geolocation) {
//     navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
//       if (permissionStatus.state === "granted") {
//         getCurrentPosition();
//       } else if (permissionStatus.state === "prompt") {
//         getCurrentPosition();
//       } else {
//         // Геолокация отключена или пользователь отказал в разрешении
//         setCoordinatesError();
//       }
//     });
//   } else {
//     // Браузер не поддерживает геолокацию
//     setCoordinatesError();
//   }
// };

export const setCoordinates = createEvent<Coordinates>();
export const setCoordinatesError = createEvent();

export const $store = createStore<Location>({
  cityName: "",
  latitude: 0,
  longitude: 0,
  isLoading: true,
  isError: false,
})
  .on(setCoordinates, (state, value) => ({
    ...state,
    latitude: value.latitude,
    longitude: value.longitude,
    isLoading: false,
    isError: false,
  }))
  .on(setCoordinatesError, (state) => ({
    ...state,
    isLoading: false,
    isError: true,
  }));

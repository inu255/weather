import { createEffect } from "effector";

function success(pos: any) {
  const crd = pos.coords;
  //   console.log(crd);
  getLocationName({ lat: crd.latitude, lon: crd.longitude }).then(console.log);
}

// function error(err: any) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

export const getCurrentPosition = () => {
  navigator.geolocation.getCurrentPosition(success, () => {}, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  });
};

type GetLocationNameParams = {
  lat: number;
  lon: number;
};

export const getLocationName = createEffect(
  async ({ lat, lon }: GetLocationNameParams): Promise<Response> => {
    const apiKey = import.meta.env.VITE_GEOCODING_KEY;
    const url = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${lat},${lon}&output=json`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(url, options);
    return res.json();
  }
);

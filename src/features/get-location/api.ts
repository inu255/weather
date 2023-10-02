import { createEffect, createEvent } from "effector";

function success(pos: any) {
  const crd = pos.coords;
  console.log(crd);
  getLocationName({ lat: crd.latitude, lon: crd.longitude });
  setCoordinates({ lat: crd.latitude, lon: crd.longitude });
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

export const setCoordinates = createEvent<LatAndLon>();

export const getLocationName = createEffect(
  async ({ lat, lon }: LatAndLon): Promise<GetLocationNameResponse> => {
    const apiKey = '3d8a32dcb9343476b9c1f22b0d0da60e' // TODO: убрать в какие-то переменные на gh pages
      // import.meta.env.MODE === "development"
      //   ? import.meta.env.VITE_GEOCODING_KEY
      //   : process.env.POSITION_API_KEY;
    // const url = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${lat},${lon}&output=json`;
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
    const options = {};
    const res = await fetch(url, options);
    return res.json();
  }
);

export type LatAndLon = {
  lat: number;
  lon: number;
};

export type GetLocationNameResponse = Location[];

export interface Location {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface LocalNames {
  pt: string;
  no: string;
  sl: string;
  bo: string;
  ko: string;
  cv: string;
  av: string;
  ru: string;
  es: string;
  tr: string;
  qu: string;
  sr: string;
  fy: string;
  wa: string;
  lv: string;
  ml: string;
  th: string;
  mi: string;
  be: string;
  fa: string;
  eu: string;
  ur: string;
  la: string;
  dz: string;
  hu: string;
  my: string;
  ms: string;
  tk: string;
  st: string;
  kl: string;
  ab: string;
  tg: string;
  ug: string;
  mt: string;
  so: string;
  sk: string;
  hi: string;
  de: string;
  pl: string;
  mk: string;
  sg: string;
  kg: string;
  nl: string;
  sq: string;
  co: string;
  mr: string;
  ht: string;
  hr: string;
  za: string;
  gl: string;
  jv: string;
  ba: string;
  ie: string;
  ty: string;
  gd: string;
  id: string;
  iu: string;
  sc: string;
  kv: string;
  dv: string;
  sm: string;
  it: string;
  ka: string;
  ce: string;
  vi: string;
  te: string;
  lt: string;
  tl: string;
  gn: string;
  ascii: string;
  et: string;
  el: string;
  bg: string;
  bs: string;
  vo: string;
  nb: string;
  fi: string;
  ch: string;
  feature_name: string;
  sh: string;
  os: string;
  ta: string;
  ak: string;
  ca: string;
  kw: string;
  ia: string;
  io: string;
  yi: string;
  ku: string;
  ps: string;
  bn: string;
  tt: string;
  oc: string;
  is: string;
  na: string;
  eo: string;
  yo: string;
  fo: string;
  bi: string;
  mg: string;
  zh: string;
  ss: string;
  cs: string;
  he: string;
  fr: string;
  nn: string;
  wo: string;
  ky: string;
  en: string;
  lg: string;
  gv: string;
  uz: string;
  ay: string;
  su: string;
  cu: string;
  ga: string;
  mn: string;
  se: string;
  zu: string;
  ro: string;
  hy: string;
  li: string;
  az: string;
  kk: string;
  ja: string;
  ar: string;
  kn: string;
  am: string;
  uk: string;
  ln: string;
  sv: string;
  an: string;
  af: string;
  da: string;
  cy: string;
  br: string;
  sw: string;
}

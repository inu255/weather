import { Weather } from "src/entities/weather";
import { Date } from "src/entities/date";

export default function Home() {
  return (
    <div>
      <Date />
      <Weather />
    </div>
  );
}

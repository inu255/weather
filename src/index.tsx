import { createRoot } from "react-dom/client";
import App from "./app";

// if (process.env.NODE_ENV === "production") {
//   console.log = function () {};
// }

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

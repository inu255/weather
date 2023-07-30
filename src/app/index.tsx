import Home from "~pages/home";
import Layout from "./with-layout";

import "normalize.css";
import { GlobalStyles } from "./global-styles";
import Theme from "./with-theme";

export default function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Layout>
        <Home />
      </Layout>
    </Theme>
  );
}

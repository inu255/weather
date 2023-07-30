import Home from "src/pages/home";
import Layout from "./with-layout";

import "normalize.css";
import { GlobalStyles } from "./global-styles";
import Theme from "./with-theme";
import * as dayjs from "dayjs";

import "dayjs/locale/ru";

dayjs.locale("ru");

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

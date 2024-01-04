import Home from "src/pages/home";
import Layout from "./with-layout";

import "normalize.css";
import { GlobalStyles } from "./global-styles";
import Theme from "./with-theme";
import * as dayjs from "dayjs";

import "dayjs/locale/ru";

dayjs.locale("ru");

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Layout>
        <Home />
      </Layout>
    </Theme>
  );
};

export default App;

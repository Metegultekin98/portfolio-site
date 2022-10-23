import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../../types/page";

const Home: NextPageWithLayout = () => {
  return <div>index</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

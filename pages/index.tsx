import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../components/Layout";
import styles from "../public/static/styles/Landing.module.css";
import { NextPageWithLayout } from "../types/page";

const Landing: NextPageWithLayout = () => {
  return (
    <div
      className={`${styles.landingPage} absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 text-xl md:text-5xl text-center overflow-hidden h-full flex-col flex justify-center`}
    >
      <div className="mr-20">
        <p
          className={`${styles.landingTextOne} overflow-hidden whitespace-nowrap m-auto`}
        >
          A Developer That
        </p>
      </div>
      <div className="ml-20">
        <p
          className={`${styles.landingTextTwo} overflow-hidden whitespace-nowrap m-auto`}
        >
          Gets The Job Done
        </p>
      </div>
      <div
        className={`${styles.neonSign} text-base md:text-3xl mt-12 md:mt-20 flex justify-center`}
      >
        <Link href="/home">
          <div className={`${styles.neonBtn} relative p-2 md:p-5 cursor-pointer`}>
            <span>MEET HIM</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Landing;

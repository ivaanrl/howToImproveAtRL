import Head from "next/head";
import { useState } from "react";
import { useMeasure } from "react-use";
import { useSpring, animated } from "react-spring";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>How to improve at Rocket League</title>
      </Head>
      <Navbar />
    </>
  );
}

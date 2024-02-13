import Image from "next/image";
import { Inter } from "next/font/google";
import { Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "@/components/Login";
import { Router } from "next/router";
import Car from "@/components/car";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

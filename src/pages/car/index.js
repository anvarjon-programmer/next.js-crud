import { Inter } from "next/font/google";
import { Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Car from "@/components/car";
const inter = Inter({ subsets: ["latin"] });

export default function Ca() {
  // TODO cookieni tekshirish
  return (
    <Fragment>
      <Car />
    </Fragment>
  );
}

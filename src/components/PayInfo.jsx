import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Header from "./Header";
import Middle from "./Middle";
import Functionality from "./Functionality";
import Datas from "./Datas";
import Pagination from "./Pagination";


const PayInfo = () => {
  return (
    <div className="">
      <Header />

      <div className="p-5">
        <h2 className="font-semibold md:text-lg ">Overview</h2>
        <Middle />
      </div>

      <Functionality/>
      <Datas/>
      <Pagination/>
    </div>
  );
};

export default PayInfo;

import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { PiSquaresFour } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { PiSpeakerHighBold } from "react-icons/pi";
import { IoBarChartOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { PiNavigationArrow } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { IoColorPaletteOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    name: "Orders",
    path: "/orders",
    icon: <FaRegListAlt />,
  },
  {
    id: 3,
    name: "Products",
    path: `/products`,
    icon: <PiSquaresFour />,
  },
  {
    id: 4,
    name: "Delivery",
    path: `/delivery`,
    icon: <TbTruckDelivery />,
  },
  {
    id: 5,
    name: "Marketing",
    path: `/marketing`,
    icon: <PiSpeakerHighBold />,
  },
  {
    id: 6,
    name: "Analytics",
    path: `/analytics`,
    icon: <IoBarChartOutline />,
  },
  {
    id: 7,
    name: "Payments",
    path: `/payments`,
    icon: <MdOutlinePayments />,
  },
  {
    id: 8,
    name: "Tools",
    path: `/tools`,
    icon: <PiNavigationArrow />,
  },
  {
    id: 9,
    name: "Discounts",
    path: `/discounts`,
    icon: <CiDiscount1 />,
  },
  {
    id: 10,
    name: "Audience",
    path: `/audience`,
    icon: <SlPeople />,
  },
  {
    id: 11,
    name: "Appearance",
    path: `/appearance`,
    icon: <IoColorPaletteOutline />,
  },
  {
    id: 12,
    name: "Plugins",
    path: `/plugins`,
    icon: <SlEnergy />,
  },
];

export const Sidebar = () => {
  return (
    <div className="bg-slate-800 text-white h-screen p-1">
      <div className="flex space-x-4 md:space-x-6 p-3 md:p-6 shadow-md">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU"
            alt=""
            className="h-11 md:h-14 w-11 md:w-14 rounded-md mt-2"
          />
        </div>
        <div className="m-auto">
          <h2 className="text-lg md:text-xl">Nishyan</h2>
          <Link to="/payments">
            <p className="text-sm text-slate-100 underline md:text-base">
              Visit Store
            </p>
          </Link>
        </div>
        <div className="m-auto md:text-xl">
          <FaChevronDown />
        </div>
      </div>

      <div className="mt-2">
        {menu.map((item) => (
          <div className="p-2 hover:bg-slate-600">
            <Link to={item.path} key={item.id} className="flex gap-4 ml-3">
              <div className="m-auto md:text-lg">{item.icon}</div>
              <div className="md:text-base flex-1">{item.name}</div>
            </Link>
          </div>
        ))}
      </div>
     
      <div className="fixed bottom-0 bg-slate-700 p-3 flex gap-2 rounded-md justify-center ml-2 md:ml-4">
         <div className="bg-slate-600 p-1 m-auto "><MdOutlineAccountBalanceWallet/></div>
         <div className="text-sm text-slate-100">
            <p>Availiable Credits</p>
            <p>220.10</p>
         </div>
      </div>
    </div>
  );
};

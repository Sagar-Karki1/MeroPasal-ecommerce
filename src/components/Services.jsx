import React from "react";

import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      serviceName: "Fast Shipping",
      icons: <TbTruckDelivery />,
    },
    {
      id: 2,
      serviceName: "24x7 Technical Support",
      icons: <BiSupport />,
    },
    {
      id: 3,
      serviceName: "Super Secure Payment",
      icons: <RiSecurePaymentLine />,
    },
    {
      id: 4,
      serviceName: "100% Money Back Gurantee",
      icons: <GiReceiveMoney />,
    },
  ];
  return (
    <>
      <div className="w-full bg-slate-100 border">
        <div className="w-full max-w-[1300px] m-auto px-4 bg-white shadow-lg">
          <h3 className="capitalize font-semibold text-2xl text-teal-600 ">
            our services
          </h3>
          <div className="services-content md:flex md:justify-between">
            <div className="services-img md:w-[45%] ">
              <figure>
                <img src="./images/Services.svg" alt="" className="w-full" />
              </figure>
            </div>
            <div className="services-data md:w-[45%] h-1/2 grid grid-cols-2 gap-x-8 gap-y-4 md:mt-24">
              {serviceList.map(({ id, serviceName, icons }) => (
                <div
                  key={id}
                  className="flex flex-col text-center justify-center items-center rounded-md bg-white drop-shadow-lg h-[12vh]"
                >
                  <span className="opacity-70 text-3xl text-indigo-800">
                    {icons}
                  </span>
                  <p className="font-medium text-gray-500 text-xs">
                    {serviceName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

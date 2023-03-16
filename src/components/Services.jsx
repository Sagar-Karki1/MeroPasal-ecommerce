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
      icons: <TbTruckDelivery color="blue" size={30} />,
    },
    {
      id: 2,
      serviceName: "24x7 Technical Support",
      icons: <BiSupport color="blue" size={30} />,
    },
    {
      id: 3,
      serviceName: "Super Secure Payment",
      icons: <RiSecurePaymentLine color="blue" size={30} />,
    },
    {
      id: 4,
      serviceName: "100% Money Back Gurantee",
      icons: <GiReceiveMoney color="blue" size={30} />,
    },
  ];
  return (
    <>
      <div className="w-full bg-slate-100">
        <div className="w-full max-w-[1300px] h-[70vh] m-auto px-4 bg-white shadow-lg">
          <h3 className="capitalize font-semibold text-4xl text-teal-600 ">
            our services
          </h3>
          <div className="services-content md:flex justify-between">
            <div className="services-img w-[45%] ">
              <figure>
                <img src="./images/Services.svg" alt="" className="w-full" />
              </figure>
            </div>
            <div className="services-data w-[45%] h-1/2 grid grid-cols-2 gap-x-8 gap-y-4 mt-24">
              {serviceList.map(({ id, serviceName, icons }) => (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center rounded-md bg-white drop-shadow-lg h-[15vh]"
                >
                  <span className="opacity-70">{icons}</span>
                  <p className="font-medium text-gray-500 text-lg">
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

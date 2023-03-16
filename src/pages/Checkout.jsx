import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="w-full h-[92vh] bg-slate-100">
        <div className="w-full max-w-[1300px] h-full m-auto bg-white shadow-lg pt-12">
          <div className="shipping-info ">
            <h1 className="bg-slate-700 text-white text-2xl capitalize font-medium py-2 px-4">
              Shipping Info
            </h1>
            <div className="flex justify-between pr-4 pt-4">
              <div className="px-4 w-[70%]">
                <form
                  action=""
                  method="post"
                  className="grid grid-cols-2 gap-x-16 gap-y-6"
                >
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-lg font-medium text-gray-500"
                    >
                      First Name:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-4"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-lg font-medium text-gray-500"
                    >
                      Last Name:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-lg font-medium text-gray-500"
                    >
                      Last Name:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-lg font-medium text-gray-500"
                    >
                      Street Address:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-lg font-medium text-gray-500"
                    >
                      Postal Code:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-lg font-medium text-gray-500"
                    >
                      Town/City:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-lg font-medium text-gray-500"
                    >
                      Province:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lname"
                      className="text-lg font-medium text-gray-500"
                    >
                      Phone Number:
                      <span className="text-red-500 text-lg font-semibold">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border border-slate-400 rounded-sm py-2 px-1"
                    />
                  </div>
                </form>
              </div>
              <div className="order-summary w-[25%] bg-slate-50 shadow-lg rounded-md h-[20rem]">
                <h3>Order Summary</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

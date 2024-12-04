"use client";
import logo from "@/public/images/logo-with-text.png";
import {
  IconDownload,
  IconMail,
  IconMapPin,
  IconPhone,
  IconPrinter,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const tableData = [
  {
    desc: "Room Charges",
    price: "$442",
    vat: "5%",
    total: "$452",
  },
  {
    desc: "Extra Guests Cost",
    price: "0",
    vat: "0%",
    total: "0",
  },
  {
    desc: "Extra Services",
    price: "$15",
    vat: "2%",
    total: "$20",
  },
  {
    desc: "Total",
    price: "0",
    vat: "0",
    total: "$472",
  },
];
const Invoice = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div ref={componentRef} className="box xxl:p-10" id="print-only">
      <div className="flex justify-between flex-wrap gap-3 min-[480px]:flex-nowrap items-center bb-dashed mb-6 pb-6 lg:pb-8 lg:mb-8">
        <Image src={logo} alt="logo" />
        <div className="text-end max-[479px]:text-start">
          <h4 className="h4 mb-1">Invoice</h4>
          <p className="text-sm">Invoice Number - 91735</p>
        </div>
      </div>{" "}
      <div className="grid grid-cols-12 md:divide-x rtl:md:divide-x-reverse divide-primary/20 divide-dashed mb-6 lg:mb-8">
        <div className="col-span-12 sm:col-span-5 md:col-span-4 ltr:sm:pr-3 rtl:sm:pl-3">
          <p className="text-lg font-medium mb-2">Guest Name:</p>
          <p className="text-sm mb-4">Theresa Webb</p>
          <p className="text-lg font-medium mb-2">Hotel Details:</p>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <div className="col-span-6 sm:col-span-4 md:col-span-4 ltr:sm:pl-3 rtl:sm:pr-3 md:px-5 xl:px-8">
          <p className="text-lg font-medium mb-2">Booking ID:</p>
          <p className="text-sm mb-4">1646464946</p>
          <p className="text-lg font-medium mb-2">Booking Date:</p>
          <p className="text-sm mb-4">22/11/2023</p>
          <p className="text-lg font-medium mb-2">Payment Mode:</p>
          <p className="text-sm mb-4">Credit Card</p>
        </div>
        <div className="col-span-6 sm:col-span-3 md:col-span-4 ltr:sm:pl-3 rtl:sm:pr-3 md:px-5 xl:px-8">
          <p className="text-lg font-medium mb-2">Check In:</p>
          <p className="text-sm mb-4">22/12/2023</p>
          <p className="text-lg font-medium mb-2">Check Out:</p>
          <p className="text-sm mb-4">29/12/2023</p>
          <p className="text-lg font-medium mb-2">Rooms:</p>
          <p className="text-sm mb-4">1</p>
        </div>
      </div>
      <div className="overflow-x-auto mb-6 lg:mb-8">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-primary/5 dark:bg-bg3">
              <th className="text-start p-3">Description</th>
              <th className="text-start p-3">Price</th>
              <th className="text-start p-3">Vat%</th>
              <th className="text-start p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ desc, price, total, vat }) => (
              <tr key={desc} className="even:bg-primary/5 dark:even:bg-bg3">
                <td className="p-3">{desc}</td>
                <td className="p-3">{price}</td>
                <td className="p-3">{vat}</td>
                <td className="p-3">{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-6 lg:mb-8">
        <span className="font-semibold">Please Note :</span>{" "}
        <span className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum...
        </span>
      </p>
      <div className="grid grid-cols-12 gap-4 xl:gap-6 bb-dashed pb-6 mb-6 lg:pb-8 lg:mb-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 p-3 lg:p-5 bg-primary/5 rounded-2xl flex items-center gap-3 xl:gap-6">
          <div className="rounded-full p-2 lg:p-3 bg-n0 dark:bg-bg3 text-primary shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]">
            <IconPhone />
          </div>
          <div>
            <p className="mb-2 text-sm lg:text-base">(406) 555-0120</p>
            <p className="text-sm lg:text-base">(706) 555-1220</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 p-3 lg:p-5 bg-primary/5 rounded-2xl flex items-center gap-3 xl:gap-6">
          <div className="rounded-full p-2 lg:p-3 bg-n0 dark:bg-bg3 text-primary shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]">
            <IconMail />
          </div>
          <div>
            <p className="mb-2 text-sm lg:text-base">info@gmail.com</p>
            <p className="text-sm lg:text-base">info@gmail.com</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 p-3 lg:p-5 bg-primary/5 rounded-2xl flex items-center gap-3 xl:gap-6">
          <div className="rounded-full p-2 lg:p-3 bg-n0 dark:bg-bg3 text-primary shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]">
            <IconMapPin />
          </div>
          <div>
            <p className="mb-2 text-sm lg:text-base">4517 Washington Ave.</p>
            <p className="text-sm lg:text-base"> Manchester, Kentucky 39495</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-6">
        <p>
          Note : This is computer generated receipt and does not require
          physical signature.
        </p>
        <div className="flex gap-4 xl:gap-6">
          <button className="btn-outline">
            {" "}
            <IconDownload size={22} /> Download
          </button>
          <button className="btn-outline" onClick={handlePrint}>
            {" "}
            <IconPrinter size={22} /> Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

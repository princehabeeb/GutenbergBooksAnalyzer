"use client";
import {
  IconArcheryArrow,
  IconDownload,
  IconSpeedboat,
  IconSwimming,
  IconTrekking,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../shared/Dropdown";
const projects = [
  {
    title: "Archery challenge",
    date: "June 01, 2023",
    icon: <IconArcheryArrow size={30} />,
    color: "text-secondary2",
    bg: "bg-secondary2/5",
  },
  {
    title: "Extreme Triathlon",
    date: "June 01, 2023",
    icon: <IconSwimming size={30} />,
    color: "text-primary",
    bg: "bg-primary/5 dark:bg-bg3",
  },
  {
    title: "Jungle Hiking",
    date: "June 01, 2023",
    icon: <IconTrekking size={30} />,
    color: "text-secondary1",
    bg: "bg-secondary1/5",
  },

  {
    title: "Extreme waterskiing",
    date: "June 01, 2023",
    icon: <IconSpeedboat size={30} />,
    color: "text-secondary3",
    bg: "bg-secondary3/5",
  },
];
const options = ["recent", "name", "date"];
const RecentActivities = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 box">
      <div className="flex flex-wrap justify-between items-center gap-3 pb-4 lg:pb-6 mb-4 lg:mb-6 bb-dashed">
        <p className="font-medium">Recent Activities</p>
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">Sort By : </p>
          <Dropdown
            items={options}
            selected={selected}
            setSelected={setSelected}
            width="w-28"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map(({ title, icon, bg, color, date }) => (
          <div key={title} className="flex items-center justify-between">
            <Link href="#" className="flex items-center gap-4">
              <span
                className={`p-2 sm:p-3 inline-flex rounded-xl ${bg} ${color}`}>
                {icon}
              </span>
              <div>
                <p className="text-base sm:text-lg md:text-xl font-medium mb-2">
                  {title}
                </p>
                <span className="text-sm">{date}</span>
              </div>
            </Link>
            <button className="bg-bg3/5 dark:bg-bg3 p-2 sm:p-3 rounded-xl">
              <IconDownload />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;

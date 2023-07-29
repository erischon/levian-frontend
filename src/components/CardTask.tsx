"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";

import { BsHourglassSplit, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdMoreTime } from "react-icons/md";

import { apiRoutes } from "@/utils/apiRoutes";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

/**
 * @description Component CardTask, card of a project
 * @version 1.0.0
 */
const CardTask = ({ task }: { task: any }) => {
  const [hours, setHours] = useState(0);
  const { tasksRoute, hoursRoute } = apiRoutes;

  const {
    data: hoursData,
    error: hoursError,
    isLoading: hoursIsLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URI}${hoursRoute.getByTask}${task?._id}`,
    fetcher
  );

  useEffect(() => {
    setHours(convertMinToHours(sumPropertyValuesInArray(hoursData, "hours")));
  }, [hoursData]);

  function sumPropertyValuesInArray(items: Array<object>, prop: string) {
    return items?.reduce(function (a: number, b: any) {
      return a + b[prop];
    }, 0);
  }

  function convertMinToHours(number: number) {
    const hours = Math.floor(number / 60);

    return hours;
  }

  const startDate = new Date(task?.startDate).toLocaleDateString();

  return (
    <>
      <div className="grid grid-cols-5 w-full justify-between items-center shadow-sm p-4 text-sm border-1 border-gray-50">
        <Link href={`/task/${task?._id}`} className="col-span-2">
          <h2 className="font-semibold">{task?.name}</h2>
        </Link>

        <Link href={`/hours/create/${task?._id}`} className="max-w-[100px]">
          <div className="text-md">
            {`${hours} ${hours > 1 ? "hours" : "hour"}`}
          </div>
        </Link>

        <Link href={`/hours/create/${task?._id}`} className="max-w-[50px] ">
          <div>
            <MdMoreTime className="text-2xl text-orange-600 font-semibold" />
          </div>
        </Link>

        <div className=" font-medium px-3 py-1 bg-teal-700 rounded-sm text-white max-w-[100px]">
          {task?.status}
        </div>
      </div>
    </>
  );
};

export default CardTask;

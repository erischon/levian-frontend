"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import useSWR from "swr";

import { BsHourglassSplit, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

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
      <div className="flex flex-col gap-2 shadow-sm p-4 text-sm">
        <div className="flex justify-between items-center">
          <Link href={`/task/${task?._id}`}>
            <h2 className="text-md font-semibold">{task?.name}</h2>
          </Link>

          <div className=" font-medium px-3 py-1 bg-purple-100 rounded-md">
            {task?.status}
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex justify-start items-center gap-2">
            <AiOutlineUser />
            <span className="">{task?.user?.name}</span>
          </div>

          <div className="">
            <Link href={`/hours/create/${task?._id}`}>
              <div className="flex justify-start items-center gap-2">
                <BsHourglassSplit />
                <span className="">{hours}</span>
              </div>
            </Link>
          </div>

          <div className="flex justify-start items-center gap-2">
            <BsCalendar2Date />
            <span className="">{startDate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTask;

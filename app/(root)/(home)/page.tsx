import MeetingTypeList from "@/components/MeetingTypeList";
import { getDateAndTime } from "@/lib/utils";
import React from "react";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col max-md:px-5 max-md:py-8 lg:p-11 justify-between">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming meet @ ....
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {getDateAndTime().time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {getDateAndTime().date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;

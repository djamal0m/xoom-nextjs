"use client";

import { MEETING_TYPE_LIST } from "@/lib/constants";
import React, { useState } from "react";
import Image from "next/image";
import { MeetingStateType } from "@/lib/types";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { cn } from "@/lib/utils";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<MeetingStateType>(undefined);

  const handleClick = (type: MeetingStateType) => {
    if (type === "recordings") {
      return router.push("/recordings");
    } else {
      setMeetingState(type);
    }
  };
  const createMeeting = () => {
    throw new Error("Function not implemented.");
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-4 xl:grid-cols-4">
      {MEETING_TYPE_LIST.map((meeting, index) => {
        return (
          <div
            key={index + ""}
            onClick={() => handleClick(meeting.meetingType)}
            className={cn(
              "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
              meeting.className
            )}
          >
            <div className="flex-center glassmorphism size-12 rounded-[10px]">
              <Image
                src={meeting.iconUrl}
                alt={`${meeting.title} icon`}
                width={27}
                height={27}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">{meeting.title}</h1>
              <p className="text-sm font-normal">{meeting.subtitle}</p>
            </div>
          </div>
        );
      })}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;

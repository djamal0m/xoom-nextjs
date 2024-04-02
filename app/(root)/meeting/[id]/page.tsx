import { MeetingPropsType } from "@/lib/types";
import React from "react";

const Meeting = ({ params }: MeetingPropsType) => {
  return <div>Meeting Room: #{params.id}</div>;
};

export default Meeting;

import { MeetingListTypes } from "./types";

export const SIDEBAR_LINKS = [
  {
    label: "Home",
    route: "/",
    imgUrl: "/icons/Home.svg",
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    imgUrl: "/icons/upcoming.svg",
  },
  {
    label: "Previous",
    route: "/previous",
    imgUrl: "/icons/previous.svg",
  },
  {
    label: "Recordings",
    route: "/recordings",
    imgUrl: "/icons/Video.svg",
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    imgUrl: "/icons/add-personal.svg",
  },
];

export const MEETING_TYPE_LIST: MeetingListTypes = [
  {
    iconUrl: "/icons/add-meeting.svg",
    title: "New Meeting",
    subtitle: "Start an instant meeting",
    className: "bg-orange-1",
    meetingType: "isInstantMeeting",
  },
  {
    iconUrl: "/icons/join-meeting.svg",
    title: "Join Meeting",
    subtitle: "via invitation link",
    className: "bg-blue-1",
    meetingType: "isJoiningMeeting",
  },
  {
    iconUrl: "/icons/schedule.svg",
    title: "Schedule Meeting",
    subtitle: "Plan your meeting",
    className: "bg-purple-1",
    meetingType: "isScheduledMeeting",
  },
  {
    iconUrl: "/icons/recordings.svg",
    title: "View Recordings",
    subtitle: "Meeting Recordings",
    className: "bg-yellow-1",
    meetingType: "recordings",
  },
];

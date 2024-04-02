export type MeetingPropsType = {
  params: {
    id: string;
  };
};

export type DateAndTime = {
  date: string;
  time: string;
};
interface MeetingType {
  iconUrl: string;
  title: string;
  subtitle: string;
  className: string;
  meetingType: MeetingStateType;
}

export type MeetingListTypes = MeetingType[];

export type MeetingStateType =
  | "isScheduledMeeting"
  | "isInstantMeeting"
  | "isJoiningMeeting"
  | "recordings"
  | undefined;

export type MeetingModalPropsType = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
};

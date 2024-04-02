import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateAndTime } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDateAndTime = (): DateAndTime => {
  const now = new Date();
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  } as const;
  const timeOptions = { hour: "2-digit", minute: "2-digit" } as const;
  const date = now.toLocaleDateString([], dateOptions);
  const time = now.toLocaleString([], timeOptions);
  const dateAndTime: DateAndTime = {
    date: date,
    time: time,
  };
  return dateAndTime;
};

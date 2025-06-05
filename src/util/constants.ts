import type { ManipulateType } from "dayjs";

export const ICONDATA = [
  "https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png",
  "https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png",
  "https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png",
  "https://www.gstatic.com/companion/icon_assets/maps_v7_2x_web_24dp.png",
];

export const HEADER_DROPDOWN_OPTION: [string, ManipulateType][] = [
  ["일", "day"],
  ["주", "week"],
  ["월", "month"],
];

export const MODE = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
} as const;

export const TIMELABELS = [
  "오전 12시",
  "오전 1시",
  "오전 2시",
  "오전 3시",
  "오전 4시",
  "오전 5시",
  "오전 6시",
  "오전 7시",
  "오전 8시",
  "오전 9시",
  "오전 10시",
  "오전 11시",
  "오후 12시",
  "오후 1시",
  "오후 2시",
  "오후 3시",
  "오후 4시",
  "오후 5시",
  "오후 6시",
  "오후 7시",
  "오후 8시",
  "오후 9시",
  "오후 10시",
  "오후 11시",
];

export type MoveMode = (typeof MODE)[keyof typeof MODE];

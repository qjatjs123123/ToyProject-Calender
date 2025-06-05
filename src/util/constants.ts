
export const ICONDATA = [
  "https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png",
  "https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png",
  "https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png",
  "https://www.gstatic.com/companion/icon_assets/maps_v7_2x_web_24dp.png",
];

export const HEADER_DROPDOWN_OPTION = ['일', '주', '월']

export const MODE = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
} as const;

export type MoveMode = typeof MODE[keyof typeof MODE];
import type { ReactNode } from "react";
import type { Dayjs, ManipulateType } from 'dayjs';
export interface childrenProps {
  children: ReactNode;
}

export interface modeProps{
  mode: ManipulateType
}

export interface IModeStrategy{
  title(selectedDate: string) : string,
  cellList(selectedDate: string) : Dayjs[]
}
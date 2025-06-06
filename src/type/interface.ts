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

export interface TodoEventContextType {
  onTodoMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  onTodoMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onTodoMouseUp: (e?: React.MouseEvent<HTMLElement>) => void;
  tempTodoBox : TempTodoBox | null
}

export interface TempTodoBox {
  top: number;
  left: number;
  width: number | "100%";
  height: number;
  date: string;
  clientX: number;
  clientY: number;
  id: number
  title: string;
  w?:number;
}
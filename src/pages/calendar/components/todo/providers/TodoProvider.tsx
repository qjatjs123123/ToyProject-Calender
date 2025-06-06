import React, {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../../../../../store/todo";
import type {
  TempTodoBox,
  TodoEventContextType,
} from "../../../../../type/interface";

const TodoContext = createContext<ExtendTodoEventContextType | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}

type ExtendTodoEventContextType = TodoEventContextType & {
  showModal?: boolean;
  clickTodoBox: TempTodoBox | null;
  setShowModal: (data:boolean) => void;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [tempTodoBox, setTempTodoBox] = useState<TempTodoBox | null>(null);
  const [startY, setStartY] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const clickTodoBox = useRef<TempTodoBox | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const current = e.currentTarget;
    clickTodoBox.current = null;
    setShowModal(false);

    if (current.contains(target)) {
      const cell = target.closest(".todo-cell") as HTMLElement | null;
      if (cell) {
        const index = Array.from(
          current.querySelectorAll(".todo-cell")
        ).indexOf(cell);

        const rect = cell.getBoundingClientRect();

        const offsetY = e.clientY - rect.top;
        const dataId = cell.dataset.id ?? "";
        setStartY(e.clientY);

        setTempTodoBox({
          top: Math.floor(offsetY / 12) * 12,
          left: rect.width * index,
          width: rect.width,
          height: 0,
          date: dataId,
          clientX: e.clientX,
          clientY: e.clientY,
        });

        document.body.style.userSelect = "none";
        document.body.style.cursor = "grabbing";
      }
    }
  };

  const handleTodoMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (startY !== null && tempTodoBox) {
      const rawHeight = e.clientY - startY;
      const snappedHeight = Math.round(rawHeight / 12) * 12; // 12px 단위 스냅

      setTempTodoBox({
        ...tempTodoBox,
        height: snappedHeight,
      });
    }
  };

  const handleTodoMouseUp = () => {
    document.body.style.userSelect = "";
    document.body.style.cursor = "";

    dispatch(
      setTodo({
        date: tempTodoBox!.date,
        value: [tempTodoBox!.top, tempTodoBox!.height],
      })
    );
    clickTodoBox.current = { ...tempTodoBox! };
    setStartY(null);
    setTempTodoBox(null);
    setShowModal(true);
  };

  const value: ExtendTodoEventContextType = {
    onTodoMouseDown: handleMouseDown,
    onTodoMouseMove: handleTodoMouseMove,
    onTodoMouseUp: handleTodoMouseUp,
    clickTodoBox: clickTodoBox.current,
    tempTodoBox,
    setShowModal,
    showModal,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoEvents = (): ExtendTodoEventContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoEvents must be used within a TodoProvider");
  }
  return context;
};

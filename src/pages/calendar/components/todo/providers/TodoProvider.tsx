import React, {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "../../../../../store/todo";
import type {
  TempTodoBox,
  TodoEventContextType,
} from "../../../../../type/interface";
import { getTodoBoxID } from "../../../../../util/calendar";

const TodoContext = createContext<ExtendTodoEventContextType | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}

type ExtendTodoEventContextType = TodoEventContextType & {
  showModal?: boolean;
  clickTodoBox: TempTodoBox | null;
  setShowModal: (data: boolean) => void;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [tempTodoBox, setTempTodoBox] = useState<TempTodoBox | null>(null);
  const [startY, setStartY] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const clickTodoBox = useRef<TempTodoBox | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (showModal) {
      setShowModal(false);
      dispatch(
        deleteTodo({
          date: clickTodoBox.current!.date,
          id: clickTodoBox.current!.id,
        })
      );
      return;
    }
    clickTodoBox.current = null;
    setShowModal(false);
    setStartY(e.clientY);
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  const handleTodoMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (startY !== null) {
      const rawHeight = e.clientY - startY;
      const snappedHeight = Math.round(rawHeight / 12) * 12; // 12px 단위 스냅
      const target = e.target as HTMLElement;

      const current = e.currentTarget;
      if (current.contains(target)) {
        const cell = target.closest(".todo-cell") as HTMLElement | null;
        if (cell) {
          const index = Array.from(
            current.querySelectorAll(".todo-cell")
          ).indexOf(cell);

          const rect = cell.getBoundingClientRect();

          const offsetY = e.clientY - rect.top;
          const offsetX = e.clientX - rect.left;
          const dataId = cell.dataset.id ?? "";

          if (!tempTodoBox)
            setTempTodoBox({
              top: Math.floor(offsetY / 12) * 12,
              left: rect.width * index + 8,
              width: rect.width,
              height: snappedHeight,
              date: dataId,
              clientX: e.clientX - offsetX,
              clientY: e.clientY,
            });
          else
            setTempTodoBox({
              ...tempTodoBox,
              height: snappedHeight,
            });
        }
      }
    }
  };

  const handleTodoMouseUp = () => {
    if (!tempTodoBox) return;
    document.body.style.userSelect = "";
    document.body.style.cursor = "";
    const id = getTodoBoxID();
    dispatch(
      setTodo({
        date: tempTodoBox!.date,
        value: [
          tempTodoBox!.top,
          tempTodoBox!.height,
          tempTodoBox!.date,
          "(제목 없음)",
          id,
        ],
      })
    );
    clickTodoBox.current = { ...tempTodoBox!, id };
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

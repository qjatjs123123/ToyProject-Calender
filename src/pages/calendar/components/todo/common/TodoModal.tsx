/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import Button from "../../../../../components/common/Button";
import CloseIcon from "../../../../../components/common/CloseIcon";
import { GlobalPortal } from "../../../../../GlobalPortal";
import type { TempTodoBox } from "../../../../../type/interface";
import { formatTimeRange } from "../../../../../util/calendar";
import { useRef, useState } from "react";
import { updateTodo } from "../../../../../store/todo";
import { INIT_TITLE } from "../../../../../util/constants";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";

interface TodoModalProps {
  tempTodoBox: TempTodoBox | null;
  showModal: (state: boolean) => void;
  onSave?: () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({ tempTodoBox, showModal }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef as any, () => showModal(false), true);
  const handleSave = () => {
    dispatch(
      updateTodo({
        value: { ...tempTodoBox!, title: title === "" ? INIT_TITLE : title },
      })
    );
    showModal(false);
  };

  if (!tempTodoBox) return null;

  return (
    <GlobalPortal.Consumer>
      <div
        ref = {modalRef}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        className="overflow-auto pt-[42px] px-0 pb-[10px] box-border flex flex-col flex-[1_0_auto] max-w-full shadow-xl relative"
        style={{
          position: "fixed",
          backgroundColor: "#F0F4F8",
          left: (tempTodoBox.clientX as number) + (tempTodoBox.w as number),
          top: tempTodoBox.clientY,
          width: 450,
          height: 250,
          zIndex: 9999,
          borderRadius: "8px",
        }}
      >
        {/* Header */}
        <Button
          onClick={() => showModal(false)}
          type="none"
          className="absolute top-[10px] right-[10px] rounded-full p-2 "
        >
          <CloseIcon />
        </Button>
        <div className="flex-1 mx-4 p-[8px_8px_0_52px] box-border w-auto">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="제목 추가"
            className="text-[25px] font-semibold w-full border-b border-gray-300 focus:outline-none focus:border-b-3 focus:border-[#0957D0] transition"
          />
        </div>

        {/* Body */}
        <div className="p-4 flex-1">
          <div className="text-sm text-gray-600">
            {formatTimeRange(
              tempTodoBox.top,
              tempTodoBox.top + tempTodoBox.height
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-4 pb-2">
          <Button
            size="md"
            onClick={handleSave}
            type="primary"
            className="rounded-[20px]"
          >
            저장
          </Button>
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
};

export default TodoModal;

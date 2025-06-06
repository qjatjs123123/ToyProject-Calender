/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import Button from "../../../../../components/common/Button";
import CloseIcon from "../../../../../components/common/CloseIcon";
import { GlobalPortal } from "../../../../../GlobalPortal";
import type { TempTodoBox } from "../../../../../type/interface";
import { formatTimeRange } from "../../../../../util/calendar";
import { deleteTodo } from "../../../../../store/todo";
import TrashIcon from "../../../../../components/common/TrashIcon";
import Text from "../../../../../components/common/Text";


interface TodoModalProps {
  tempTodoBox: TempTodoBox | null;
  showModal: (state: boolean) => void;
  onSave?: () => void;
}

const TodoDetailModal: React.FC<TodoModalProps> = ({
  tempTodoBox,
  showModal,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteTodo({
        value: { ...tempTodoBox! },
      })
    );
    showModal(false);
  };

  if (!tempTodoBox) return null;

  return (
    <GlobalPortal.Consumer>
      <div
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
        <div>
          <Button
            onClick={() => showModal(false)}
            type="none"
            className="absolute top-[10px] right-[10px] rounded-full p-2 "
          >
            <CloseIcon />
          </Button>
          <Button
            onClick={() => handleDelete()}
            type="none"
            className="absolute top-[10px] right-[40px] rounded-full p-2 "
          >
            <TrashIcon />
          </Button>
        </div>
        <div className="flex-1 mx-4 p-[8px_8px_0_52px] box-border w-auto">
          <Text size="xxl" weight="bold">
            {tempTodoBox.title}
          </Text>
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
            onClick={() => showModal(false)}
            type="primary"
            className="rounded-[20px]"
          >
            닫기
          </Button>
        </div>
      </div>
    </GlobalPortal.Consumer>
  );
};

export default TodoDetailModal;

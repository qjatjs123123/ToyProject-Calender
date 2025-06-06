import { GlobalPortal } from "../../../../../GlobalPortal";
import type { TempTodoBox } from "../../../../../type/interface";

interface TodoModalProps {
  tempTodoBox: TempTodoBox | null;
}

const TodoModal: React.FC<TodoModalProps> = ({ tempTodoBox }) => {

  if (!tempTodoBox) return <div></div>;

  return (
    <GlobalPortal.Consumer>
      <div
        style={{
          position: "fixed",
          backgroundColor: "black",
          pointerEvents: "none",
          left:tempTodoBox.clientX,
          top:tempTodoBox.clientY,
          width:500,
          height:500,
          zIndex: 9999,
          borderRadius: "6px",
        }}
      >
        dfaasdf
      </div>
    </GlobalPortal.Consumer>
  );
};

export default TodoModal;

// components/TodoTimeCell.tsx
import Text from "../../../../components/common/Text";
import { TIMELABELS } from "../../../../util/constants";

const TodoTimeCell = () => {
  return (
    <div className="grid grid-cols-1 gap-0 w-[70px] min-w-[70px]">
      {TIMELABELS.map((label, idx) => (
        <div key={idx} className="relative h-12 pr-2 text-right">
          <Text
            size="xs"
            className={`relative top-[-15px] ${idx === 0 ? "hidden" : ""} `}
          >
            {label}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default TodoTimeCell;

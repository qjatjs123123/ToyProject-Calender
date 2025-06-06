// components/TodoTimeCell.tsx
import { type FC } from "react";
import Text from "../../../../../components/common/Text";
import { TIMELABELS } from "../../../../../util/constants";

interface Props {
  className?: string;
}

const TodoTimeCell: FC<Props> = () => {
  return (
    <>
      {TIMELABELS.map((label, idx) => (
        <div key={idx} className="relative h-12 pr-2 text-right">
          <Text
            size="xs"
            className={`relative top-[-15px] ${idx === 0 ? "hidden" : ""}`}
          >
            {label}
          </Text>
        </div>
      ))}
    </>
  );
};

export default TodoTimeCell;

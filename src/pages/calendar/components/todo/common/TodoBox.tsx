/* eslint-disable @typescript-eslint/no-explicit-any */
import Text from "../../../../../components/common/Text";

import { formatTimeRange } from "../../../../../util/calendar";

const TodoBox: React.FC<any> = ({
  top,
  left = 0,
  width = "100%",
  height,
  title,
}) => {
  return (
    <div
    className="flex flex-col p-1"
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        backgroundColor: "rgb(121, 134, 203)",
        pointerEvents: "none",
        zIndex: 88,
        borderRadius: "6px",
        border: "1px solid white",
      }}
    >
      <Text size="xs" color="white" weight="bold">
        {title}
      </Text>
      <Text size="xs" color="white" weight="bold">
        {formatTimeRange(top, top + height)}
      </Text>
    </div>
  );
};

export default TodoBox;

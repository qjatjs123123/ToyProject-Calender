import { useHeaderContext } from "../../../../providers/HeaderProvider";
import Button from "../../../../components/common/Button";
import ChevronLeftIcon from "../../../../components/common/ChevronLeftIcon";
import { ChevronRightIcon } from "../../../../components/common/ChevronRightIcon";
import Text from "../../../../components/common/Text";
import HeaderComp from "../../../../components/Composite/HeaderComp";

const HeaderLeft = () => {
  const { goPrevDateByMode, goNextDateByMode, resetToday } = useHeaderContext();

  return (
    <div className="flex items-center gap-5">
      <Button
        type="none"
        style="outline"
        className="w-[80px] h-[40px] rounded-[30px]"
        onClick={resetToday}
      >
        <Text size="sm">오늘</Text>
      </Button>

      <div className="flex">
        <Button
          type="none"
          className="h-[30px] w-[30px] rounded-full flex justify-center items-center"
          onClick={goPrevDateByMode}
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          type="none"
          className="h-[30px] w-[30px] rounded-full flex justify-center items-center"
          onClick={goNextDateByMode}
        >
          <ChevronRightIcon />
        </Button>
      </div>

      <HeaderComp.Text>2</HeaderComp.Text>
    </div>
  );
};

export default HeaderLeft;

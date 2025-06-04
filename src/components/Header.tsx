import ArrowDropDownIcon from "./common/ArrowDropDownIcon";
import Button from "./common/Button";
import ChevronLeftIcon from "./common/ChevronLeftIcon";
import { ChevronRightIcon } from "./common/ChevronRightIcon";
import MenuIcon from "./common/MenuIcon";
import Text from "./common/Text";
import HeaderComp from "./Composite/HeaderComp";

const Header = () => {
  return (
    <HeaderComp>
      <HeaderComp.Title src="calendarLogo.png" title="Calender" alt="logoImage">
        <Button
          type="none"
          className={
            "w-[48px] h-[48px] rounded-full flex justify-center items-center mr-[5px]"
          }
        >
          <MenuIcon className={"w-[24px] h-[24px]"} />
        </Button>
      </HeaderComp.Title>

      <HeaderComp.Nav2Cols
        left={
          <div className="flex items-center gap-5">
            <Button
              type="none"
              style="outline"
              className="w-[80px] h-[40px] rounded-[30px]"
            >
              <Text size="sm">오늘</Text>
            </Button>

            <div className="flex">
              <Button
                type="none"
                className="h-[30px] w-[30px] rounded-full flex justify-center items-center"
              >
                <ChevronLeftIcon />
              </Button>

              <Button
                type="none"
                className="h-[30px] w-[30px] rounded-full flex justify-center items-center"
              >
                <ChevronRightIcon />
              </Button>
            </div>
            <HeaderComp.Text>2025년 6월</HeaderComp.Text>
          </div>
        }
        right={
          <div className="flex items-center gap-20">
            <Button
              type="none"
              style="outline"
              className="w-[80px] h-[40px] rounded-[30px]"
            >
              <span className="flex justify-center items-center gap-2">
                <Text size="sm">주</Text>
                <ArrowDropDownIcon />
              </span>
            </Button>
            <Button>
              <img src="githubLogo.png"></img>
            </Button>
          </div>
        }
      />
    </HeaderComp>
  );
};

export default Header;

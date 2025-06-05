import Button from "../../../../components/common/Button";
import MenuIcon from "../../../../components/common/MenuIcon";

const HeaderTitle = () => {
  return (
    <Button
      type="none"
      className={
        "w-[48px] h-[48px] rounded-full flex justify-center items-center mr-[5px]"
      }
    >
      <MenuIcon className={"w-[24px] h-[24px]"} />
    </Button>
  );
};

export default HeaderTitle;
import Dropdown from "../../../../components/Composite/DropDown";
import Button from "../../../../components/common/Button";
import Text from "../../../../components/common/Text";
import ArrowDropDownIcon from "../../../../components/common/ArrowDropDownIcon";

const HeaderRight = () => {
  return (
    <div className="flex items-center gap-20">
      <Dropdown>
        <Dropdown.Toggle>
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
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>1</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button>
        <img src="githubLogo.png" alt="github" />
      </Button>
    </div>
  );
};

export default HeaderRight;

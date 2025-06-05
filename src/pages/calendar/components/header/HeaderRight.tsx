import Dropdown from "../../../../components/Composite/DropDown";
import Button from "../../../../components/common/Button";
import Text from "../../../../components/common/Text";
import ArrowDropDownIcon from "../../../../components/common/ArrowDropDownIcon";
import { HEADER_DROPDOWN_OPTION } from "../../../../util/constants";
import { useHeaderContext } from "../../../../providers/HeaderProvider";

const HeaderRight = () => {
  const { onClick, getLabelByMode } = useHeaderContext();
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
              <Text size="sm">{getLabelByMode()}</Text>
              <ArrowDropDownIcon />
            </span>
          </Button>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {HEADER_DROPDOWN_OPTION.map(([opt, mode]) => (
            <Dropdown.Item key={opt} onClick={() => onClick(mode)}>
              {opt}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <Button>
        <img src="githubLogo.png" alt="github" />
      </Button>
    </div>
  );
};

export default HeaderRight;

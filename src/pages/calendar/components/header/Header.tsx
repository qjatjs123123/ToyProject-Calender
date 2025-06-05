import HeaderComp from "../../../../components/Composite/HeaderComp";
import HeaderTitle from "./HeaderTitle";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";


const Header = () => {
  return (
    <HeaderComp>
      <HeaderComp.Title src="calendarLogo.png" title="Calender" alt="logoImage">
        <HeaderTitle />
      </HeaderComp.Title>

      <HeaderComp.Nav2Cols
        left={
          <HeaderLeft />
        }
        right={
          <HeaderRight />
        }
      />
    </HeaderComp>
  );
};

export default Header;

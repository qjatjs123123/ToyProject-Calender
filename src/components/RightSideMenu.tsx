import React from "react";
import Button from "./common/Button";
import { ICONDATA } from "../util/constants";

const RightSideMenu: React.FC = () => {
  return (
    <aside className="w-[56px] bg-transparent">
      {ICONDATA.map((iconUrl) => (
        <div className="w-[56px] h-[56px] relative block px-3 py-2" key={iconUrl}>
          <Button
            type="none"
            className="h-[40px] w-[40px] absolute left-[8px] top-[8px]"
            css={{
              backgroundImage: `url("${iconUrl}")`,
              userSelect: "none",
              backgroundSize: "20px 20px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
          />
        </div>
      ))}
    </aside>
  );
};

export default RightSideMenu;

import React from "react";

const RightSideMenu: React.FC = () => {
  return (
    <aside className="w-[56px] bg-[transparent]">
      <nav>
        <ul className="space-y-3">
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-200">
              메뉴 1
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-200">
              메뉴 2
            </a>
          </li>
          <li>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-200">
              메뉴 3
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default RightSideMenu;

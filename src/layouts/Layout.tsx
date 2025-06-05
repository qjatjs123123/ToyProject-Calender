import type { ReactNode } from "react";
import RightSideMenu from "../components/common/RightSideMenu";

interface BaseLayoutProps {
  header: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
}

const Layout = ({ header, sidebar, children }: BaseLayoutProps) => {
  return (
    <div className="">
      <header className="h-[64px]">{header}</header>
      <div className="flex h-[calc(100vh-64px)]">
        <div className="flex flex-col w-[256px] bg-transparent h-[100%]">
          {sidebar}
        </div>
        <main className="shadow-md bg-white flex-1 rounded-[20px] mb-[16px]">
          {children}
        </main>
        <aside className="w-[56px] bg-transparent">
          <RightSideMenu />
        </aside>
      </div>
    </div>
  );
};

export default Layout;

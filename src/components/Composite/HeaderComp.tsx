import React, { type ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

interface HeaderTitleProps {
  children: ReactNode;
}

interface HeaderNavProps {
  children: ReactNode;
}

interface HeaderNavItemProps {
  href: string;
  children: ReactNode;
}

const HeaderComp: React.FC<HeaderProps> & {
  Title: React.FC<HeaderTitleProps>;
  Nav: React.FC<HeaderNavProps>;
  NavItem: React.FC<HeaderNavItemProps>;
} = ({ children }) => {
  return (
    <header className="bg-transparent h-16 pt-2 pb-2 px-6 flex items-center justify-between">
      {children}
    </header>
  );
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return <h1 className="text-xl font-bold text-gray-800">{children}</h1>;
};

const HeaderNav: React.FC<HeaderNavProps> = ({ children }) => {
  return (
    <nav>
      <ul className="flex space-x-4">{children}</ul>
    </nav>
  );
};

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="text-gray-600 hover:text-blue-500">
        {children}
      </a>
    </li>
  );
};

HeaderComp.Title = HeaderTitle;
HeaderComp.Nav = HeaderNav;
HeaderComp.NavItem = HeaderNavItem;

export default HeaderComp;

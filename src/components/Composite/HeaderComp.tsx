import React, { type ReactNode } from "react";
import Text from "../common/Text";

interface HeaderProps {
  children?: ReactNode;
}

interface HeaderTitleProps {
  src: string;
  alt: string;
  title: string;
  children?: ReactNode;
}

interface HeaderNavProps {
  left: ReactNode;
  right: ReactNode;
}
interface HeaderImageProps {
  src: string;
  alt?: string;
}

const HeaderComp: React.FC<HeaderProps> & {
  Title: React.FC<HeaderTitleProps>;
  Nav2Cols: React.FC<HeaderNavProps>;
  Text: React.FC<HeaderProps>;
  Image: React.FC<HeaderImageProps>;
} = ({ children }) => {
  return (
    <header className="bg-transparent p-4 h-16 flex items-center justify-between">
      {children}
    </header>
  );
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  src,
  alt,
  title,
  children,
}) => {
  return (
    <div className="flex min-w-[238px] pr-[25px] box-border flex-1 items-center">
      {children}
      <div className="flex gap-2 items-center">
        <HeaderImage src={src} alt={alt} />
        <HeaderText>{title}</HeaderText>
      </div>
    </div>
  );
};

const HeaderText: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Text size="xl" weight="medium">
      {children}
    </Text>
  );
};

const HeaderImage: React.FC<HeaderImageProps> = ({ src, alt = "" }) => {
  return <img src={src} alt={alt} width={40} height={40} />;
};

const Nav2Cols: React.FC<HeaderNavProps> = ({ left, right }) => {
  return (
    <nav className="flex justify-between w-full">
      <ul className="flex space-x-4">{left}</ul>
      <ul className="flex space-x-4">{right}</ul>
    </nav>
  );
};

HeaderComp.Title = HeaderTitle;
HeaderComp.Nav2Cols = Nav2Cols;
HeaderComp.Text = HeaderText;
HeaderComp.Image = HeaderImage;

export default HeaderComp;

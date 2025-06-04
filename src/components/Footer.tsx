import React from "react";
import Text from "./common/Text";

const Footer: React.FC = () => {
  return (
    <footer className="text-[12px] mt-auto py-2 pl-7">
      <Text size="xs">이용약관 - </Text>
      <Text size="xs">개인정보처리방침</Text>
    </footer>
  );
};

export default Footer;

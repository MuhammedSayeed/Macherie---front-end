import React from "react";

type FooterTitleProps = {
  children: React.ReactNode;
};

const FooterTitle = ({ children }: FooterTitleProps) => {
  return <h3 className="text-sm font-medium mb-6">{children}</h3>;
};

export default FooterTitle;

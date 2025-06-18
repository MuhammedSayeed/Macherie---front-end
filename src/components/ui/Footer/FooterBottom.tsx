import React from "react";
import { bottomFooterLinks, footerLanguage } from "./FooterLinks";

const FooterBottom = () => {
  const renderLinks = bottomFooterLinks.map(({ label }, index) => (
    <React.Fragment key={label}>
      <span className="hover:underline cursor-pointer text-[#5A5A5A]">{label}</span>
      {index < bottomFooterLinks.length - 1 && <span className="text-[#DADADA]">|</span>}
    </React.Fragment>
  ));
  return (
    <div className="border-t mt-10 p-4 flex flex-col md:flex-row items-center justify-center space-x-4 text-gray-500 text-xs">
      <div className="flex gap-2 flex-wrap text-center md:text-left">{renderLinks}</div>
      <div className="mt-4 md:mt-0 flex items-center gap-2">
        <span>{footerLanguage.country}</span>
        <span>|</span>
        <span>{footerLanguage.language}</span>
      </div>
    </div>
  );
};

export default FooterBottom;

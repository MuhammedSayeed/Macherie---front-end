import React from "react";
import FooterColumn from "./FooterColumn";
import SocialIcons from "./SocialIcons";
import FooterBottom from "./FooterBottom";

import { helpLinks, companyLinks, socialIcons } from "./FooterLinks";
import AppDownload from "./AppDownload";

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-8 text-sm">
      <div className="max-w-[983px] mb-20 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterColumn title="Help" links={helpLinks} />
        <FooterColumn title="Company" links={companyLinks} />

        <div className="col-span-2 space-y-4">
          <AppDownload />

          <div>
            <SocialIcons icons={socialIcons} />
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;

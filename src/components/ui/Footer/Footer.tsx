import React from "react";
import FooterColumn from "./FooterColumn";
import SocialIcons from "./SocialIcons";
import FooterBottom from "./FooterBottom";

import { helpLinks, companyLinks, socialIcons } from "./FooterLinks";
import AppDownload from "./AppDownload";

const Footer = () => {
  return (
<footer className="bg-white border-t pt-8 text-sm">
  <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <FooterColumn title="Help" links={helpLinks} />
    <FooterColumn title="Company" links={companyLinks} />
    
    <div className="lg:col-span-2 space-y-8">
      <AppDownload />
      <SocialIcons icons={socialIcons} />
    </div>
  </div>

  <FooterBottom />
</footer>

  );
};

export default Footer;

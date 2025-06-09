import { IconType } from "react-icons";

export interface FooterLink  {
  label: string;
  href: string;
};

export interface SocialIcon {
  name: string;
  icon: IconType;
  href: string;
};

export interface FooterLanguage {
  country: string;
  language: string;
};

export interface IFooterLink {
    label: string;
    href: string;
}
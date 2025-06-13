import { FooterLanguage, FooterLink, SocialIcon } from '@/interfaces/Footer';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaPinterestP,
  FaXTwitter,
  FaTiktok,
} from 'react-icons/fa6';



// ----------------------------
// Footer Column Links
// ----------------------------
export const helpLinks: FooterLink[] = [
  { label: "My order status", href: "#" },
  { label: "Frequently asked questions", href: "#" },
  { label: "Processing a return", href: "#" },
  { label: "How to make a return", href: "#" },
  { label: "Delivery", href: "#" },
  { label: "How to avoid scams when shopping online", href: "#" },
];

export const companyLinks: FooterLink[] = [
  { label: "About us", href: "#" },
  { label: "Work with us", href: "#" },
];

// ----------------------------
// Social Media Icons
// ----------------------------
export const socialIcons: SocialIcon[] = [
  { name: "TikTok", icon: FaTiktok, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "X", icon: FaXTwitter, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
  { name: "Spotify", icon: FaSpotify, href: "#" },
  { name: "Pinterest", icon: FaPinterestP, href: "#" },
];

// ----------------------------
// Bottom Footer Links
// ----------------------------
export const bottomFooterLinks: FooterLink[] = [
  { label: "Cookie preferences", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Purchase conditions", href: "#" },
  { label: "Cookies policy", href: "#" },
  { label: "T&C Pull&Bear Community", href: "#" },
];

// ----------------------------
// Language / Location
// ----------------------------
export const footerLanguage: FooterLanguage = {
  country: "Panamá",
  language: "English",
};

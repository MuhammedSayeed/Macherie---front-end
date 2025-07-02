import { FaGoogle, FaFacebookF } from "react-icons/fa";

export const socialLogins = [
  {
    id: "google",
    label: "Continue with Google",
    icon: FaGoogle,
    onClick: () => {
      console.log("Google login clicked");
    },
  },
  {
    id: "facebook",
    label: "Continue with Facebook",
    icon: FaFacebookF,
    onClick: () => {
      console.log("Facebook login clicked");
    },
  },
];

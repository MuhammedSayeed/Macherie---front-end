import { socialLogins } from "@/constants/login";
import { Button } from "../ui/button"; // adjust the path as needed

const SocialLoginButtons = () => (
  <div className="flex flex-col gap-3">
    {socialLogins.map(({ id, label, icon: Icon, onClick }) => (
      <Button
        key={id}
        variant="ghost"
        onClick={onClick}
        className="w-full text-md bg-[#f0f0f0] py-7 rounded-full justify-center text-black font-semibold hover:bg-[#eaeaea]"
      >
        <Icon className="text-xl" />
        {label}
      </Button>
    ))}
  </div>
);

export default SocialLoginButtons;

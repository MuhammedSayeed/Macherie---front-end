import { SocialIcon } from "@/interfaces/Footer";
import FooterTitle from "../FooterTitle";

interface SocialIconsProps {
  icons: SocialIcon[];
}

const SocialIcons = ({ icons }: SocialIconsProps) => {
  const renderIcons = icons.map(({ name, icon: Icon }) => (
    <div key={name} className="bg-[#f6f6f6] p-2 rounded-full">
      <Icon className="w-5 h-5 text-[#666666] hover:text-gray-900" />
    </div>
  ));

  return (
    <div>
      <FooterTitle>Follow Us!</FooterTitle>
      <div className="flex gap-4">{renderIcons}</div>
    </div>
  );
};

export default SocialIcons;

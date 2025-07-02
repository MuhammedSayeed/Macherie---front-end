"use client";
import useLoginDrawer from "@/hooks/useLoginDrawer";
import Drawer from "../ui/drawer/Drawer";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import LoginDivider from './LoginDivider';
import SocialLoginButtons from './SocialLoginButtons';
import GuestInfoNote from './GuestInfoNote';
import LoginFooter from './LoginFooter';

const LoginDrawer = () => {
  const { isOpen, handelLoginOnClose } = useLoginDrawer();
  return (
    <Drawer isOpen={isOpen} onClose={handelLoginOnClose}>
      <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
        <LoginHeader />
        <div className="px-4 py-5 flex flex-col space-y-8">
        <LoginForm />
        <LoginDivider />
        <SocialLoginButtons />
        <GuestInfoNote />
        <LoginFooter />        </div>
      </div>
    </Drawer>
  );
};

export default LoginDrawer;

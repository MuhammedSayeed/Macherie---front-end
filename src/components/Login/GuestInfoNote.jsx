import { HiOutlineInformationCircle } from "react-icons/hi";

const GuestInfoNote = () => (
  <p className="text-xs leading-3  rounded-xl p-2 bg-[#F6F6F6] text-gray-600 flex items-center justify-center gap-2">
    <HiOutlineInformationCircle className="text-lg" />
    Check your orders and returns made as a guest user here.
  </p>
);

export default GuestInfoNote;

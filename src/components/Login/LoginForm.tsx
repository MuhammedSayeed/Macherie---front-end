"use client";

import { Button } from "../ui/button";

const LoginForm = () => {

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="loginInput" className="text-lg font-semibold">
        Enter your telephone number or email address
      </label>
      <input
        id="loginInput"
        className="px-4 py-3 rounded-lg bg-[#f0f0f0]"
        placeholder="Telephone / Email"
      />

      <label className="flex items-center gap-2 mt-2 text-sm">
        <input type="checkbox" className="accent-black bg-[#f0f0f0]" />
        Stay logged in
      </label>
      <Button className="py-7 w-full rounded-full">
        Next
      </Button>
      <div className="text-sm text-center text-gray-600 mt-2 underline cursor-pointer">
        Access with code
      </div>
      <div className="text-sm text-center text-gray-600 mt-1 underline cursor-pointer">
        If you don’t know your password, CLICK HERE.
      </div>
    </div>
  );
};

export default LoginForm;

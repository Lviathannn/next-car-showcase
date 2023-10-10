"use client";
import { CustomButton } from ".";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <CustomButton
      title="Sign in"
      type="button"
      containerStyle="text-white rounded-full bg-primary-blue min-w-[130px]"
      textStyles="font-semibold"
      isDisable={false}
      handleClick={() => {
        signIn("google", { callbackUrl: "http://localhost:3000/" });
      }}
    />
  );
}

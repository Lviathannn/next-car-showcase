"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import { CustomButton } from ".";

export default function Navbar() {
  const { data } = useSession();

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        {data?.user ? (
          <div className="flex gap-4 items-center">
            {data?.user?.image && (
              <div className=" gap-5 items-center hidden lg:flex p-1 px-4 bg-[#4971ff] xl:bg-white rounded-full">
                <Image
                  src={data.user?.image}
                  alt="Profile Picture"
                  width={40}
                  className="object-contain rounded-full"
                  height={40}
                />
                <p className="text-white xl:text-primary-blue font-semibold">
                  Welcome ,{data?.user?.name}
                </p>
              </div>
            )}
            <CustomButton
              title="Sign Out"
              type="button"
              containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
              textStyles="font-semibold"
              isDisable={false}
              handleClick={() => {
                signOut();
              }}
            />
          </div>
        ) : (
          <CustomButton
            title="Sign in"
            type="button"
            containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
            textStyles="font-semibold"
            isDisable={false}
            handleClick={() => {
              signIn("google", { callbackUrl: "http://localhost:3000/" });
            }}
          />
        )}
      </nav>
    </header>
  );
}

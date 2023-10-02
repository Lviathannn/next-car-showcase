"use client";

import Image from "next/image";

type Props = {
  isDisable: boolean;
  type: "button" | "submit" | "reset";
  title: string;
  handleClick?: () => void;
  containerStyle?: string;
  textStyles?: string;
  icon?: string;
};

export default function CustomButton({
  isDisable,
  type,
  title,
  handleClick,
  containerStyle,
  textStyles,
  icon,
}: Props) {
  return (
    <button
      disabled={isDisable}
      type={type}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {icon && <Image src={icon} alt="Icon" width={20} height={20} />}
    </button>
  );
}

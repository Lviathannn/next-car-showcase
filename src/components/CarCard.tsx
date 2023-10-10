"use client";
import Image from "next/image";
import { CarDetails, CustomButton } from ".";
import { calculateCarRent, generateCarImage } from "@/utils";
import { useState } from "react";
import { carType } from "@/utils/type";

type Props = {
  car: carType;
};

export default function CarCard({ car }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium"> /Day</span>
      </p>
      <div className="relative w-full h-44 my-3 object-contain">
        <Image
          src={generateCarImage(car)}
          alt="Card Model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="Steer Logo" />
            <p className="text-[14px]">{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <Image src="/tire.svg" width={20} height={20} alt="Tire Logo" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <Image src="/gas.svg" width={20} height={20} alt="Gas Logo" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Rent Now"
            containerStyle="w-full py-[16px] rounded-full bg-primary-blue 
            "
            textStyles="text-white text-[14px] font-bold leading-[17px]"
            icon="/right-arrow.svg"
            isDisable={false}
            type="button"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
        car={car}
      />
    </div>
  );
}

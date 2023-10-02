"use client";
import Image from "next/image";
import { CustomButton } from ".";

type Props = {};

export default function Hero({}: Props) {
    return (
        <div className="hero ">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find,book,or rent a car - quickly and easily</h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless booking process
                </p>
                <CustomButton
                    title="Explore Cars"
                    containerStyle="bg-primary-blue text-white rounded-full mt-5"
                    isDisable={false}
                    type="button"
                    // handleClick={() => {}}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" fill className="object-contain" alt="Hero Image" />
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </div>
    );
}

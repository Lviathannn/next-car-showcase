"use client";
import { useState } from "react";
import Image from "next/image";
import { SearchManufacturer } from ".";
import { useRouter } from "next/navigation";

type ButtonProps = { customClass?: string };

export default function Searchbar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer == "" && model == "") {
      return alert("Please enter a manufacturer or model");
    }
    updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        <SearchButton customClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Model Icon"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
          }}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton customClass="sm:hidden" />
      </div>
      <SearchButton customClass="max-sm:hidden" />
    </form>
  );
}

function SearchButton({ customClass }: ButtonProps) {
  return (
    <button type="submit" className={`ml-3 z-10 ${customClass}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Magnifying Glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
}

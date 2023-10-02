"use client";

import { useState } from "react";
import { SearchManufacture } from "./";

type Props = {};

export default function Searchbar({}: Props) {
  const [manufacture, setManufacture] = useState("");
  return (
    <form className="searchbar" onSubmit={() => {}}>
      <div className="searchbar__item">
        <SearchManufacture manufacture={manufacture} setManufacture={setManufacture} />
      </div>
    </form>
  );
}

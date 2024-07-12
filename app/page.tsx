"use client";
import Radio from "@/components/Radio";
import { useState } from "react";
import { data } from "@/constants/data";

export default function Home() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="text-xl font-bold mt-40 flex gap-5">
      {data.map((offer) => (
        <Radio
          key={offer.id}
          selected={selected}
          setSelected={setSelected}
          heading={offer.heading}
          description={offer.description}
          id = {offer.id}
        />
      ))}
    </div>
  );
}

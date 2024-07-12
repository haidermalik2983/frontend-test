import React, { FC } from "react";

interface Props {
  selected: number;
  setSelected: (select: number) => void;
  heading: string;
  description: string;
  id: number;
}

const index: FC<Props> = ({
  selected,
  setSelected,
  heading,
  description,
  id,
}) => {
  return (
    <>
      <div
        className={` w-[235px] cursor-pointer relative flex flex-col border p-5 pb-1.5 rounded-2xl ${
          selected === id
            ? "border-[#8583F4] bg-[#ECEBFE]"
            : "bg-[#DEE2EA] border-[#CDD2DE]"
        }`}
        onClick={() => setSelected(id)}
      >
        {id === 1 ? (
          <div className="absolute -top-3 w-full justify-center items-center flex left-0">
            <span className="bg-[#5A58F4] font-normal text-white text-xs pl-[15px] w-[97px] rounded-lg px-3 py-1">
              BEST DEAL
            </span>
          </div>
        ) : (
          <></>
        )}
        <div className="flex items-baseline gap-1.5">
          <div
            className={` ${
              selected === id ? "border-[#5A58F4]" : "border-[#CDD2DE]"
            } border rounded-full `}
          >
            <input
              checked={selected === id}
              onChange={() => setSelected(id)}
              type="radio"
              // className="h-8 w-8 cursor-pointer border-gray-300 accent-[#585AF2] text-indigo-600 focus:ring-indigo-600"
              className="peer hidden"
            />

            <div
              className={` ${
                selected === id ? "border-[#5A58F4]" : "border-white"
              } w-8 h-8 bg-white border-[8px] rounded-full`}
            ></div>
          </div>

          <div className="relative -top-3">
            <label className="cursor-pointer text-lg font-bold">
              {heading}{" "}
            </label>
            <p className="font-normal mt-[2px] text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

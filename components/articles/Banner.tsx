import React from "react";
interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Banner({ children, icon }: Props) {
  return (
    <div>
      <div className="flex justify-center items-center xl:mx-10 bg-black backdrop-blur-sm bg-opacity-30 border-3 text-center border-white text-white py-4 px-6 my-14 font-semibold shadow-md overflow-hidden">
        {icon}
        <h1 className="text-2xl font-bold ms-4">{children}</h1>
      </div>
    </div>
  );
}

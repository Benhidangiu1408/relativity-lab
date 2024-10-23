import React from "react";

export interface Props {
  title: string;
  subtitle: string;
}
const TitleOurCapaAndOurSucc = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full">
      <ul className="list-none text-center mt-20  justify-center content-center">
        <li className="font-bold text-lg pt--1">{title}</li>
        <li className=" text-xs  w-2/3 mx-auto ml-30">{subtitle}</li>
      </ul>
    </div>
  );
};

export default TitleOurCapaAndOurSucc;

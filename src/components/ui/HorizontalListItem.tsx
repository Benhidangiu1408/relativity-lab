import React from "react";
export interface Props {
  subtitle: string;
  title: string;
  text: string;
}
const HorizontalListItem = ({ subtitle, title, text }: Props) => {
  return (
    <>
      <ul className="list-none text-left mt-20 py-5 pl-5 w-2/3 ">
        <li className="font-bold text-xs">{subtitle}</li>
        <li className="font-bold text-lg pt--1">{title}</li>
        <li className="flex border-2 my-5 pl-3 ml--2 w-4/5">{text}</li>
        <li>
          <a href=" aa" className="underline text-xs">
            Read More{" "}
          </a>
        </li>
      </ul>
    </>
  );
};

export default HorizontalListItem;

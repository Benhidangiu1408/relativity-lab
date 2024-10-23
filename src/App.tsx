import React, { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AppMenuBar from "./components/ui/AppMenuBar";
import Title from "./components/ui/Title";
import SubTitle from "./components/ui/SubTitle";
import Getstarted from "./components/ui/Getstarted";
import ExploreService from "./components/ui/ExploreService";
import ContentExploreS from "./components/ui/ContentExploreS";
import AppAccor from "./components/ui/AppAccor";
import TitleAppAccor from "./components/ui/TitleAppAccor";
import HorizontalList from "./components/ui/HorizontalList";
import TitleOurCapaAndOurSucc from "./components/ui/TitleOurCapaAndOurSucc";
import { Props } from "./components/ui/TitleOurCapaAndOurSucc";
import { CardProps } from "./components/ui/AppCard";
import AppCard from "./components/ui/AppCard";
import WebFooter from "./WebFooter";
import FormWeb from "./FormWeb";
import UploadFile from "./UploadFile";
const data: Props[] = [
  {
    title: "Our Capabilities In Web Development Services",

    subtitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Our Success Stories",

    subtitle:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
];
const Carddata: CardProps[] = [
  {
    title: "Front-End",

    text: " Requirements gathering POC and rapid prototyping UI development Business logic implementation 3rd party integrations",
  },
  {
    title: "Back-End",

    text: "API design & development Database architecture Microservices Continous integration DevOps",
  },
];
function App() {
  const [count, setCount] = useState(0);

  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme on initial load
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle dark mode and save the preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="  w-full   border-2 justify-center ">
      <div className=" w-full border-2">
        <AppMenuBar darkToggle={toggleDarkMode} />
      </div>

      <div className=" w-full  border-2 flex flex-col space-y-5">
        <div>
          {" "}
          <div className="pt-8">
            <Title />
          </div>
          <div className="pt-8">
            <SubTitle />
          </div>
          <div className="pt-8">
            <Getstarted />
          </div>
        </div>

        <div className=" w-full border-2 flex flex-col ">
          {" "}
          <div className="">
            <ExploreService />
          </div>
          <div className="pt-2">
            <ContentExploreS />
          </div>
          <div className="pt-2  justify-center max-w-4xl mx-auto">
            <HorizontalList />
          </div>
          <div className="mt-15 w-full">
            <TitleOurCapaAndOurSucc
              title={data[0].title}
              subtitle={data[0].subtitle}
            />
          </div>
          <div className="flex flex-row justify-center max-w-4xl space-x-5 mx-auto mt-10">
            <AppCard title={Carddata[0].title} text={Carddata[0].text} />
            <AppCard title={Carddata[1].title} text={Carddata[1].text} />
          </div>
          <div className="mt-15">
            <TitleOurCapaAndOurSucc
              title={data[1].title}
              subtitle={data[1].subtitle}
            />
          </div>
          <div>
            <iframe
              className="mx-auto mt-5 aspect-video ..."
              src="https://www.youtube.com/..."
            ></iframe>
          </div>
          <div className=" pt-10  justify-center mx-auto w-2/3 max-w-4xl">
            <TitleAppAccor />
          </div>
          <div className="pt-8 text-left justify-center mx-auto w-2/3 max-w-4xl pb-15">
            {/* <AppAccor /> */}
            <FormWeb />
          </div>
          <div className=" max-w-7xl w-full mt-15 ">
            <WebFooter />
          </div>
          <UploadFile />
        </div>
      </div>
    </div>
  );
}

export default App;

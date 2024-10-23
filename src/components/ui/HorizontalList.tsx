import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./card";
import HorizontalListItem from "./HorizontalListItem";
import { Image } from "lucide-react";
import { Props } from "./HorizontalListItem";
const data: Props[] = [
  {
    subtitle: "Featured  Service",
    title: "Web Design & Development",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut a ",
  },
  {
    subtitle: "Featured  Service",
    title: "Web Design & Development",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut a ",
  },
  {
    subtitle: "Featured  Service",
    title: "Web Design & Development",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut a ",
  },
  {
    subtitle: "Featured  Service",
    title: "Web Design & Development",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut a ",
  },
  {
    subtitle: "Featured  Service",
    title: "Web Design & Development",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut a ",
  },
];

const HorizontalList = () => {
  return (
    <div className=" justify-center max-w-4xl mx-auto">
      <Carousel className=" mx-20">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1 justify-center">
                <Card>
                  <CardContent className="flex flex-row  items-center  justify-center max-w-4xl">
                    <HorizontalListItem
                      subtitle={item.subtitle}
                      title={item.title}
                      text={item.text}
                    />
                    <img
                      src="https://mtv.vn/uploads/2023/02/25/meo-gg.jpg"
                      className="h-20 w-25 ml-2"
                    ></img>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HorizontalList;

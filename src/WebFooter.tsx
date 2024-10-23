import React from "react";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Link } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { RiMailLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
const footer = () => {
  return (
    <div className="pl-20 bg-blue-950 text-zinc-50">
      <h1 className="text-left pt-6 ">RELATIVITY LAB</h1>
      <div className="flex flex-row pt-5 ">
        <div className="flex flex-col w-2/5 ">
          <div className="flex flex-row">
            <FiPhone className="" />
            <div className="text-left pl-3">0123456789</div>
          </div>

          <div className="flex flex-row">
            <RiMailLine />
            <div className="text-left pl-3">Relativitylabs@gmail.com</div>
          </div>

          <div className="flex flex-row">
            <CiLocationOn size={40} />
            <div className="text-left pl-3">
              Phương Nam Book City, 212 Đ. Nguyễn Trãi, Phường Phạm Ngũ Lão,
              Quận 1, Hồ Chí Minh, Vietnam
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 text-left">
          <div>Services</div>
          <div>Contact</div>
          <div>About</div>
        </div>
        <div className="flex flex-col ml-16 mt-7 ">
          <div className="flex flex-row">
            <Badge>
              Facebook <FaArrowRight className="ml-1" />
            </Badge>

            <Badge className="ml-4">
              Instagram <FaArrowRight className="ml-1" />{" "}
            </Badge>
          </div>
          <div className="flex flex-row pt-3">
            <Badge>
              LinkedIn <FaArrowRight className="ml-1" />
            </Badge>
            <Badge className="ml-6">
              Behance <FaArrowRight className="ml-1" />
            </Badge>
          </div>
        </div>
        <div className="pl-10 mt-14">@2024 All rights reserved</div>
      </div>
    </div>
  );
};

export default footer;

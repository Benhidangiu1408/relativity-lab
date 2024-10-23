import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

interface Props {
  closePreview: () => void;
}

const ConfigurePrint = ({ closePreview }: Props) => {
  return (
    <div>
      <p className="pb-1 text-black mr-auto ">Printer</p>
      <Select>
        <SelectTrigger className=" bg-red-200 !important text-black">
          <SelectValue placeholder="Theme" className="text-black" />
        </SelectTrigger>
        <SelectContent className="bg-red-200 !important text-black">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <p className="pb-1 text-black mr-auto mt-3">Paper size</p>
      <Select>
        <SelectTrigger className="bg-red-200 !important text-black">
          <SelectValue placeholder="Theme" className="text-black" />
        </SelectTrigger>
        <SelectContent className="bg-red-200 !important text-black">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <RadioGroup
        defaultValue="option-one"
        className="flex flex-row text-black mt-3"
      >
        <div className="space-x-2">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            className="form-radio border-black text-blue-500 focus:ring-blue-500"
          />
          <Label htmlFor="option-one">One-Sided</Label>
        </div>
        <div className="space-x-2">
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className="form-radio border-black text-blue-500 focus:ring-blue-500"
          />
          <Label htmlFor="option-two">Double-Sided</Label>
        </div>
      </RadioGroup>

      <div className="flex flex-col mt-3">
        <Label htmlFor="number" className="text-black pb-3">
          Number of printed pages
        </Label>
        <Input
          type="number"
          id="number"
          placeholder="1"
          className="bg-red-200 !important text-black placeholder:text-black"
        />
      </div>

      <div className="flex flex-col mt-3 ">
        <Label htmlFor="number" className="text-black pb-3">
          Number of copies
        </Label>
        <Input
          type="number"
          id="number"
          placeholder="1"
          className="bg-red-200 !important text-black  placeholder:text-black"
        />
      </div>

      {/* Print Button */}
      <div className="flex justify-between mt-3">
        <Button
          className="  text-black hover:text-blue-700 justify-start "
          // onClick={handlePrint}
        >
          <div className=" border border-3 bg-red-200 rounded w-14">Print</div>
        </Button>

        <Button
          className=" text-black hover:text-gray-700  border-7 border-rose-500 ml-auto"
          onClick={closePreview}
        >
          <div className=" border border-3 bg-red-100 rounded w-14">Close</div>
        </Button>
      </div>
    </div>
  );
};

export default ConfigurePrint;

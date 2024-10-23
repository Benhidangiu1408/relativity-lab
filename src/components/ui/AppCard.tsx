import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface CardProps {
  title: string;
  text: string;
}
const AppCard = ({ title, text }: CardProps) => {
  return (
    <Card className="w-3/5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-left w-2/3">{text}</p>
      </CardContent>
    </Card>
  );
};

export default AppCard;

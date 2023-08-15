import React from "react";
import { Progress } from "../ui/progress";

type CardProps = {
    name: string;
    value: number;
};

const SkillsCard = ({name, value}: CardProps) => {
  return (
    <div className="place-items-center">
      <div className="flex-col justify-between">
        <h1 className="font-poppins">{name}</h1>
        <Progress value={value} className="w-[60%]" />
      </div>
      <div></div>
    </div>
  );
};

export default SkillsCard;

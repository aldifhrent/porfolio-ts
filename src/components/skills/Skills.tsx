import React from "react";
import SkillsCard from "./SkillsCard";
import { SkillData } from "@/app/utils/skills";

type SkillCardProps = {
  id: number;
  name: string;
  value: number;
};

const Skills = () => {
  return (
    <div className="mt-36 max-w-7xl items-center">
      <h1 className="text-center text-3xl font-bold mb-12 font-poppins tracking-wide">Skills</h1>
      <div>
        {SkillData.map((item: SkillCardProps) => (
          <SkillsCard key={item.id} name={item.name} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

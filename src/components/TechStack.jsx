"use client";

import { techStackCategories } from "@/data/stack";
import * as Icons from "lucide-react";

export default function TechStack() {
  const getIcon = (iconName) => {
    const LucideIcon = Icons[iconName] || Icons.Code;
    return <LucideIcon size={16} className="tech-icon-svg" />;
  };

  return (
    <div className="tech-stack-wrapper">
      <div className="tech-stack-grid">
        {techStackCategories.map((cat) => (
          <div key={cat.name} className="tech-category-card">
            <div className="tech-category-header">
              <h3 className="tech-category-title">{cat.name}</h3>
              <span className="tech-category-stat">{cat.stat}</span>
            </div>

            <div className="tech-skills-grid">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="tech-skill-item">
                  {getIcon(skill.icon)}
                  <span className="tech-skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

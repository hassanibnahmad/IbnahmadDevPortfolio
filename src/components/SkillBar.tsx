import React, { useEffect, useState } from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay * 200);
    return () => clearTimeout(timer);
  }, [delay]);

  const percentage = parseInt(skill.level);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-200 font-medium">{skill.name}</span>
        <span className="text-indigo-400 text-sm">{skill.level}</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2">
        <div 
          className={`bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out ${
            animate ? `w-[${percentage}%]` : 'w-0'
          }`}
          style={{ width: animate ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
import React from 'react';
import { firstStack, secondStack } from '../../utils/tecnologies';
import BallCanvas from '../skills/Ball';

const Skill = () => {
  return (
    <div className="grid grid-cols-4 gap-10 mt-10">
      {firstStack.map((technology) => (
        <div className="w-[58px] h-[58px]" key={technology.titulo}>
          <BallCanvas icon={technology.imagen} />
        </div>
      ))}
      {secondStack.map((technology) => (
        <div className="w-[58px] h-[58px]" key={technology.titulo}>
          <BallCanvas icon={technology.imagen} />
        </div>
      ))}
    </div>
  );
};

export default Skill;

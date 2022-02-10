import { createContext } from 'react';
import useSkillsHook from '../hooks/useSkillsHook';

export const SkillsContext = createContext();

const SkillsProvider = ({ children }) => {
  const skillsData = useSkillsHook();

  return (
    <SkillsContext.Provider value={skillsData}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsProvider;

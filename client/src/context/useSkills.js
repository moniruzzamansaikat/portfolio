import { useContext } from 'react';
import { SkillsContext } from './SkillsContext';

const useSkills = () => useContext(SkillsContext);

export default useSkills;

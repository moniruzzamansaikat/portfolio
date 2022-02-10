import { createContext } from 'react';
import useProjectsHook from '../hooks/useProjectsHook';

export const ProjectContext = createContext();

const ProjectsProvider = ({ children }) => {
  const projectData = useProjectsHook();

  return (
    <ProjectContext.Provider value={projectData}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectsProvider;

import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

const useProjects = () => useContext(ProjectContext);

export default useProjects;

import { collatedTasks } from "../constants";

export const getCollatedTasksExist = selectedProject =>
  collatedTasksExist.find(task => task.key === selectedProject);

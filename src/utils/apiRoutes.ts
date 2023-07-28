export const apiRoutes = {
  projectsRoute: {
    getOne: "/api/projects/project/",
  },
  tasksRoute: {
    getOne: "/api/tasks/",
    getByProject: "/api/tasks/project/",
  },
  hoursRoute: {
    post: "/api/hours/",
    getByTask: "/api/hours/task/",
  },
};

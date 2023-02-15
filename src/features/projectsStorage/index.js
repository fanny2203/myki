import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    updateNameProject: (state, action) => {
      const newProjects = state.projects.map((project) => {
        if (project.name === action.payload.name) {
          return { ...project, name: action.payload.newName };
        }
        return project;
      });
      state.projects = newProjects;
    },
  },
});

export const { setProjects, updateNameProject } = projectsSlice.actions;

export default projectsSlice.reducer;

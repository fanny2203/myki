import { createSlice } from "@reduxjs/toolkit";

const initialState = { section: "status", projects: [], connectors: [] };

const projectsSectionSlice = createSlice({
  name: "projectsSection",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload;
    },

    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    updateNameMyProject: (state, action) => {
      const newData = state.projects.map((project) => {
        if (project.name === action.payload.name) {
          return { ...project, name: action.payload.newName };
        }
        return project;
      });
      state.projects = newData;
    },
    addTag: (state, action) => {
      const newValues = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return { ...project, tags: [...project.tags, action.payload.newTag] };
        }
        return project;
      });
      state.projects = newValues;
    },

    setConnectors: (state, action) => {
      state.connectors = action.payload;
    },
  },
});

export const {
  setSection,
  setProjects,
  updateNameMyProject,
  setConnectors,
  addTag,
} = projectsSectionSlice.actions;
export default projectsSectionSlice.reducer;

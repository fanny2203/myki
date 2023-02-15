import { configureStore } from "@reduxjs/toolkit";

//Slices
import testReducer from "../features/test/testSlice";
import sesionReducer from "../features/customer/sesion";
import modalReducer from "../features/modal/modal";
import connectReducer from "../features/connect/connect";
import connectByMongoReducer from "../features/connect/connectByMongo";
import isLoadingReducer from "../features/Loader";
import connectByDriveReducer from "../features/connect/connectByDrive";
import myConnectorsReducer from "../features/connect/myConnectors";
import modalsStorageReducer from "../features/modal/modalsStorage";
import uploadReducer from "../features/handleFile";
import collectionsReducer from "../features/collectionsStorage";
import projectsReducer from "../features/projectsStorage";
import projectsSectionSlice from "../features/projectsSection";
import binsReducer from "../features/bins";
import themeReducer from "../features/theme";
import languagesReducer from "../features/languages";

export const store = configureStore({
  reducer: {
    test: testReducer,
    sesion: sesionReducer,
    modal: modalReducer,
    connect: connectReducer,
    connectByMongo: connectByMongoReducer,
    isLoading: isLoadingReducer,
    connectByDrive: connectByDriveReducer,
    myConnectors: myConnectorsReducer,
    modalsStorage: modalsStorageReducer,
    handleFile: uploadReducer,
    collectionsStorage: collectionsReducer,
    projectsStorage: projectsReducer,
    projectSection: projectsSectionSlice,
    bins: binsReducer,
    theme: themeReducer,
    languages: languagesReducer
  },
});

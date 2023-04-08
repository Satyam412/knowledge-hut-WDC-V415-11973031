import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "../reducers/assignmentReducer";

export default configureStore({
  reducer: {
    assignments: assignmentReducer,
  },
});

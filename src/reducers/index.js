import { combineReducers } from "redux";
const combineStore = combineReducers({
  app: () => {
    return {
      name: "Notion"
    }
  }
});

export default combineStore;

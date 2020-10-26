import { createContext, useReducer, Dispatch } from "react";
import {
  ContentCreator,
  TrainingPack,
  Mechanic,
  Tutorial,
} from "./shared/interfaces";

interface State {
  featuredTrainingPackCreators: {
    [creator: string]: {
      contentCreatorInfo: ContentCreator;
      trainingPacks: TrainingPack[];
      mechanics: Mechanic[];
      tutorials: Tutorial[];
    };
  };
}

const initialState: State = { featuredTrainingPackCreators: {} };
const store = createContext<{ state: State; dispatch: Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});
const { Provider } = store;
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: State, action: { payload: any; type: string }) => {
      switch (action.type) {
        case "POPULATE_SIDEBAR":
          return { ...state, ...action.payload };
        default:
          return state;
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };

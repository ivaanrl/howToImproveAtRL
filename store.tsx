import { createContext, useReducer, Dispatch } from "react";

export interface TrainingPack {
  difficulty: string;
  featured: number;
  field_image: string;
  training_pack_code: string;
  training_pack_name: string;
  traning_style: {};
  training_pack_author: string | null;
  training_pack_id: number;
}

export interface Mechanic {
  difficulty: string;
  featured: number;
  training_pack_code?: string;
  training_pack_name?: string;
  training_pack_author: string | null;
  training_pack_id: number;
}
interface State {
  trainingPacks: TrainingPack[];
  mechanics: Mechanic[];
}

const initialState: State = { trainingPacks: [], mechanics: [] };
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

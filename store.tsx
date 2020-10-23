import { createContext, useReducer, Dispatch } from "react";

export interface ContentCreator {
  content_creator_id: string;
  tiktok: string;
  youtube: string;
  twitter: string;
  steam: string;
  instagram: string;
  personal_website: string;
  facebook: string;
  discord: string;
  twitch: string;
  featured: 1 | 0;
  name: string;
}

export interface TrainingPack {
  training_pack_id: number;
  field_image:
    | "Mannfield"
    | "DFH"
    | "Urban"
    | "Utopia"
    | "Wasteland"
    | "Aquadome"
    | "Neo"
    | "Champions"
    | "Farmstead"
    | "Salty"
    | "Forbidden";
  difficulty: string;
  training_pack_code: string;
  traning_style: {};
  training_pack_name: string;
  name: string;
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
  featuredTrainingPackCreators: {
    [creator: string]: {
      contentCreatorInfo: ContentCreator;
      trainingPacks: TrainingPack[];
    };
  };
  mechanics: Mechanic[];
}

const initialState: State = { featuredTrainingPackCreators: {}, mechanics: [] };
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

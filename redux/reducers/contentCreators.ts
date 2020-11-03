import { ContentCreatorsReducerState } from '../../shared/interfaces/reducers/contentCreatorsReducer';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ContentCreatorsReducerState = [];

const { actions, reducer, name } = createSlice({
  name: 'contentCreators',
  initialState,
  reducers: {
    populate_content_creators(
      _state,
      action: PayloadAction<
        {
          name: string;
        }[]
      >,
    ) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const fetchContenCreators = () => async (dispatch) => {
  const response = await (
    await fetch('/api/contentCreators/getContentCreators')
  ).json();
  dispatch(actions.populate_content_creators(response as any));
};

export { actions, reducer, name };

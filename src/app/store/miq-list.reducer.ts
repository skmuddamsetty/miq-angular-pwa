import * as MIQListActions from './miq-list.actions';

const initialState = {
  miqList: [],
  miqMap: new Map(),
  selectedKey: String
};

export function miqListReducer(
  state = initialState,
  action: MIQListActions.MIQListActions
) {
  switch (action.type) {
    case MIQListActions.ADD_IQ:
      return {
        ...state,
        miqList: [...state.miqList, action.payload]
      };
    case MIQListActions.ADD_IQS:
      const tempMap = state.miqMap;
      if (tempMap.get(action.payload.key) === undefined) {
        tempMap.set(action.payload.key, action.payload.miqList);
      }
      return {
        ...state,
        miqMap: tempMap
      };
    case MIQListActions.ADD_SELECTED_KEY:
      return {
        ...state,
        selectedKey: action.payload
      };
    default:
      return state;
  }
}

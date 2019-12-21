import * as MIQListActions from './miq-list.actions';

const initialState = {
  miqList: []
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
      return {
        ...state,
        miqList: [...state.miqList, ...action.payload]
      };
    default:
      return state;
  }
}

import { Action } from '@ngrx/store';
import { IQ } from '../iqa-list/interfaces/iq';
import { MiqMap } from './miq-map';

export const ADD_IQ = 'ADD_IQ';
export const ADD_IQS = 'ADD_IQS';
export const ADD_SELECTED_KEY = 'ADD_SELECTED_KEY';

export class AddInterviewQuestion implements Action {
  readonly type = ADD_IQ;

  constructor(public payload: IQ) {}
}

export class AddInterviewQuestions implements Action {
  readonly type = ADD_IQS;

  constructor(public payload: MiqMap) {}
}

export class AddSelectedKey implements Action {
  readonly type = ADD_SELECTED_KEY;

  constructor(public payload: string) {}
}
export type MIQListActions =
  | AddInterviewQuestion
  | AddInterviewQuestions
  | AddSelectedKey;

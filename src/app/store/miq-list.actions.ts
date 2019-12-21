import { Action } from '@ngrx/store';
import { IQ } from '../iqa-list/interfaces/iq';

export const ADD_IQ = 'ADD_IQ';
export const ADD_IQS = 'ADD_IQS';

export class AddInterviewQuestion implements Action {
  readonly type = ADD_IQ;

  constructor(public payload: IQ) {}
}

export class AddInterviewQuestions implements Action {
  readonly type = ADD_IQS;

  constructor(public payload: IQ[]) {}
}

export type MIQListActions = AddInterviewQuestion | AddInterviewQuestions;

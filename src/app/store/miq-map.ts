import { IQ } from '../iqa-list/interfaces/iq';

export class MiqMap {
  key: string;
  miqList: IQ[];

  constructor(key, miqList) {
    this.key = key;
    this.miqList = miqList;
  }
}

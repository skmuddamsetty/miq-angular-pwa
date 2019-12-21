import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IQ } from './interfaces/iq';

@Component({
  selector: 'app-iqa-list',
  templateUrl: './iqa-list.component.html',
  styleUrls: ['./iqa-list.component.scss']
})
export class IqaListComponent implements OnInit {
  topic: string;
  id: string;
  item: Observable<any>;
  iqaList = [];

  constructor(
    public afs: AngularFirestore,
    private store: Store<{ miqList: { miqMap: any; selectedKey: string } }>
  ) {}

  ngOnInit() {
    this.store.select('miqList').subscribe(res => {
      if (res && res.miqMap) {
        this.iqaList = res.miqMap.get(res.selectedKey);
      } else {
        this.iqaList = [];
      }
    });
  }
}

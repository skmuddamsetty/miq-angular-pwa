import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { DataService } from '../shared-services/data.service';

@Component({
  selector: 'app-iqa-list',
  templateUrl: './iqa-list.component.html',
  styleUrls: ['./iqa-list.component.scss']
})
export class IqaListComponent implements OnInit, OnDestroy {
  iqaList = [];
  storeSubscription: Subscription;

  constructor(
    private store: Store<{ miqList: { miqMap: any; selectedKey: string } }>,
    public dataService: DataService
  ) {}

  ngOnInit() {
    if (!this.storeSubscription) {
      this.storeSubscription = this.store.select('miqList').subscribe(res => {
        if (res && res.miqMap && res.selectedKey) {
          this.iqaList = res.miqMap.get(res.selectedKey);
        } else {
          this.iqaList = [];
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}

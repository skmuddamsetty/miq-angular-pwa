import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { IdbService } from './shared-services/idb.service';
import { DataService } from './shared-services/data.service';
import { Store } from '@ngrx/store';
import { IQ } from './iqa-list/interfaces/iq';
import * as MIQListActions from './store/miq-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTopicTitle = 'Angular';
  selectedTopicKey = 'angular';
  openSidenav = false;
  showFiller = false;
  myForm: FormGroup;
  networkMode = 'online'; // to track network mode
  temp = `<pre><code class="language-css">body {
    font: 100% Helvetica, sans-serif;
    color: #333;
  }

  .box {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
  }
  </code>
  </pre>`;
  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public route: ActivatedRoute,
    private idbService: IdbService,
    public dataService: DataService,
    private store: Store<{ miqList: { miqList: IQ[]; miqMap: any } }>
  ) {
    navigator.onLine === true
      ? (this.networkMode = 'online')
      : (this.networkMode = 'offline');
    this.idbService.connectToIDB();
  }

  ngOnInit() {
    // call the loadQuestionsFromDB method initially and activate the subscription to store
    this.dataService.loadQuestionsFromDB('random');
    this.router.navigate(['miq', this.selectedTopicKey]);
  }

  onTopicClick(topic: string, title: string) {
    this.selectedTopicTitle = title;
    this.selectedTopicKey = topic;
  }

  onSubTopicSelect(id: string) {
    // dispatching the selected key to the store
    this.store.dispatch(new MIQListActions.AddSelectedKey(id));
    // calling
    // this.dataService.loadQuestionsFromDB(id);
    // routing the user
    this.router.navigate(['miq', this.selectedTopicKey, id]);
  }
}

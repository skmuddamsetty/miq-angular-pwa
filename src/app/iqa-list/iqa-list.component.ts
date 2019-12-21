import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iqa-list',
  templateUrl: './iqa-list.component.html',
  styleUrls: ['./iqa-list.component.scss']
})
export class IqaListComponent implements OnInit {
  private sub: any;
  topic: string;
  id: string;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  iqaList = [];

  constructor(private route: ActivatedRoute, public afs: AngularFirestore) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // get the selected topic and unique id from the route
      this.topic = params['topic'];
      this.id = params['id'];
      // if there is topic and id in the url
      if (this.id && this.topic) {
        this.itemDoc = this.afs.doc<any>('interview-questions/' + this.id);
        this.item = this.itemDoc.valueChanges();
        this.item.subscribe(res => {
          console.log(res);
          if (res && res.iqList) {
            this.iqaList = res.iqList;
          } else {
            this.iqaList = [];
          }
        });
      }
    });
  }
}

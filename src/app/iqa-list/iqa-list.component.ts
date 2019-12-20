import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  AngularFirestoreDocument,
  AngularFirestore
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { DataService } from "../shared-services/data.service";

@Component({
  selector: "app-iqa-list",
  templateUrl: "./iqa-list.component.html",
  styleUrls: ["./iqa-list.component.scss"]
})
export class IqaListComponent implements OnInit {
  private sub: any;
  topic: string;
  id: string;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  iqaList = [];

  constructor(
    private route: ActivatedRoute,
    public afs: AngularFirestore,
    public dataService: DataService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topic = params["topic"];
      this.id = params["id"];
      if (this.id && this.topic) {
        this.dataService.loadQuestionsFromDB(this.id);
        this.itemDoc = this.afs.doc<any>("angular/" + this.id);
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

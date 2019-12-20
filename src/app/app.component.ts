import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { FormBuilder, NgForm, Validators, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  selectedTopic = "";
  openSidenav = false;
  showFiller = false;
  private sub: any;
  myForm: FormGroup;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public route: ActivatedRoute,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onTopicClick(topic: string, title: string) {
    this.selectedTopic = title;
    this.router.navigate(["/", topic]);
  }

  onSubTopicSelect(id: string) {
    this.itemDoc = this.afs.doc<any>("angular/" + id);
    this.item = this.itemDoc.valueChanges();
    this.item.subscribe(res => {
      console.log(res);
    });
    console.log(this.item);
    this.router.navigate(["/", "angular", id]);
  }
}

import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IdbService } from "./shared-services/idb.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  selectedTopicTitle = "Angular";
  selectedTopicKey = "angular";
  openSidenav = false;
  showFiller = false;
  myForm: FormGroup;
  networkMode = "online"; // to track network mode
  constructor(
    public router: Router,
    public afs: AngularFirestore,
    public route: ActivatedRoute,
    private idbService: IdbService
  ) {
    navigator.onLine === true
      ? (this.networkMode = "online")
      : (this.networkMode = "offline");
    this.idbService.connectToIDB();
  }

  ngOnInit() {
    this.router.navigate(["miq", this.selectedTopicKey]);
  }

  onTopicClick(topic: string, title: string) {
    this.selectedTopicTitle = title;
    this.selectedTopicKey = topic;
  }

  onSubTopicSelect(id: string) {
    this.router.navigate(["miq", this.selectedTopicKey, id]);
  }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  selectedTopic = "";
  openSidenav = false;
  showFiller = false;

  constructor(public router: Router) {}

  onTopicClick(topic: string, title: string) {
    this.selectedTopic = title;
    this.router.navigate(["/", topic]);
  }

  onSubTopicSelect(id: string) {
    this.router.navigate(["/", "angular", id]);
  }
}

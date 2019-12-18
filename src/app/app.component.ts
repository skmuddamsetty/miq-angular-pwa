import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "miq-angular-pwa";
  selectedTopic = "";
  openSidenav = false;
  showFiller = false;
  onTopicClick(topic: string) {
    this.selectedTopic = topic;
  }
}

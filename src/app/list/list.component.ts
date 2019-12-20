import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  topic: string;
  private sub: any;
  profileForm = new FormGroup({
    firstName: new FormControl("", [Validators.email]),
    lastName: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl("")
  });
  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topic = params["topic"];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    // console.log(this.myForm.get("email").value);
  }
}

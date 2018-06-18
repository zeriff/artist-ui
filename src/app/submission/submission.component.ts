import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../services/api.service";
import { Submission } from "../class/submission";
import { LoaderService } from "../services/loader.service";

@Component({
  selector: "app-submission",
  templateUrl: "./submission.component.html",
  styleUrls: ["./submission.component.css"]
})
export class SubmissionComponent implements OnInit {
  submission: Submission = {};
 
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private loader: LoaderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSubmission();
  }

  getSubmission() {
    let id = this.route.snapshot.paramMap.get("id");
    this.loader.show();
    this.api.getSubmission(id).subscribe(res => {
      this.submission = res;
      this.loader.hide();
    });
  }
  onEditClick() {
    this.router.navigate(["submit", this.submission.id, "edit"]);
  }
}

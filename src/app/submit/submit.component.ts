import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../services/api.service";
import { LoaderService } from "../services/loader.service";
import * as _ from "lodash";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastService } from "../services/toast.service";

@Component({
  selector: "app-submit",
  templateUrl: "./submit.component.html",
  styleUrls: ["./submit.component.css"]
})
export class SubmitComponent implements OnInit {
  @ViewChild("submission") submitForm: NgForm;
  private action: string = "Submit";
  private editMode: boolean = false;
  private loading: boolean = false;
  private submissionId: string = "";
  errors: Array<string> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private toast: ToastService
  ) {}

  onFormSubmitError(err) {
    let submission = this.submitForm;
    this.loading = false;
    let keys = _.keys(err.error);
    keys.forEach(key => {
      this.errors.push(_.upperFirst(key) + " is " + err.error[key]);
    });
    submission.form.setErrors(this.errors);
    this.errors = [];
  }

  onFormSubmitSuccess(res) {
    this.loading = false;
    this.router.navigate(["/submission", res.id]);
    this.toast.show("Successfully submited..");
  }

  onFormSubmit() {
    let submission = this.submitForm;
    this.loading = true;
    if (this.editMode) {
      let email = localStorage.getItem("email");
      if (email != submission.form.value.email) {
        submission.form.setErrors(["You are not allowed to edit"]);
        this.loading = false;
        return;
      }
      this.api
        .updateSubmission(submission.form.value, this.submissionId)
        .subscribe(
          this.onFormSubmitSuccess.bind(this),
          this.onFormSubmitError.bind(this)
        );
    } else {
      localStorage.setItem("email", submission.form.value.email);
      this.api
        .postSubmission(submission.form.value)
        .subscribe(
          this.onFormSubmitSuccess.bind(this),
          this.onFormSubmitError.bind(this)
        );
    }
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.submissionId = id;
      this.editMode = true;
      this.action = "Submit Edits";
      this.api.getSubmission(id).subscribe(res => {
        this.submitForm.form.setValue({
          email: res.email,
          link: res.link,
          name: res.name,
          desc: res.desc
        });
      });
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../services/loader.service";

@Component({
  selector: "app-sticky",
  templateUrl: "./sticky.component.html",
  styleUrls: ["./sticky.component.css"]
})
export class StickyComponent implements OnInit {
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {}

  onButtonClick() {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 3000);
  }
}

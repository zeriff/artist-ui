import { Component, OnInit, Input } from "@angular/core";
import { LoaderService } from "../services/loader.service";
import { ApiService } from "../services/api.service";
import { Router } from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: "app-sticky",
  templateUrl: "./sticky.component.html",
  styleUrls: ["./sticky.component.css"]
})
export class StickyComponent implements OnInit {
  @Input() onCategoryChange;
  private categories: any = [];
  private selectedCategory = { id: 0 };
  constructor(
    private loaderService: LoaderService,
    private api: ApiService,
    private router: Router
  ) {
    this.api.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  ngOnInit() {}

  onButtonClick(category: any) {
    this.onCategoryChange(category);
    this.selectedCategory = category;
  }
}

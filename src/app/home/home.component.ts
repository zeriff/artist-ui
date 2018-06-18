import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}
  items = [];
  loadPins(id) {
    return this.api.getPins(id).subscribe(pins => {
      this.items = pins;
    });
  }
  ngOnInit() {
    this.loadPins(0);
    window.onscroll = () => {
      var sticky = document.getElementById("category");
      if (window.pageYOffset > sticky.offsetTop) {
        sticky.classList.add("active");
      } else {
        sticky.classList.remove("active");
      }
    };
  }
  onCategoryChange = category => {
    return this.loadPins(category.id);
  };
}

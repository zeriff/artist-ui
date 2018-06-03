import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    window.onscroll = () => {
      var sticky = document.getElementById("category");
      if (window.pageYOffset > sticky.offsetTop) {
        sticky.classList.add("active");
      } else {
        sticky.classList.remove("active");
      }
    };
  }
}

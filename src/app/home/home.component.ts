import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  items = [
    "/assets/img/1.jpg",
    "/assets/img/2.jpeg",
    "/assets/img/3.jpeg",
    "/assets/img/1.jpg",
    "/assets/img/2.jpeg",
    "/assets/img/3.jpeg",
    "/assets/img/1.jpg",
    "/assets/img/2.jpeg",
    "/assets/img/3.jpeg"
  ];

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

import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { VideoService } from "../services/video.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() item;
  @Input() active: boolean = null;
  @ViewChild("video") videoFrame;
  videoActive: boolean = false;
  constructor(private video: VideoService) {}

  ngOnInit() {
    this.video.videoState.subscribe(res => {
      if (res.activeId != this.item.id) {
        this.videoActive = false;
        if (this.videoFrame) this.videoFrame.nativeElement.src = "";
      }
    });
  }

  onPlayClick() {
    var me = this;
    this.videoActive = true;
    this.videoFrame.nativeElement.src = this.item.oembed_str;
    this.video.activate(this.item.id);
  }
}

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  private videoSubject = new Subject<{ activeId: string }>();
  videoState = this.videoSubject.asObservable();

  constructor() {}
  activate(id) {
    this.videoSubject.next({
      activeId: id
    });
  }
}

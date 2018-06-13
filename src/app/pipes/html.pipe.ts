import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: "html"
})
export class HtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

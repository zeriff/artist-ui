import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StickyComponent } from "./sticky/sticky.component";
import { HeaderComponent } from "./header/header.component";

import { RouterModule, Routes } from "@angular/router";
import { SubmitComponent } from "./submit/submit.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "submit", component: SubmitComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StickyComponent,
    HeaderComponent,
    SubmitComponent,
    HomeComponent
  ],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

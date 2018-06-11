import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { StickyComponent } from "./sticky/sticky.component";
import { HeaderComponent } from "./header/header.component";
import { SubmitComponent } from "./submit/submit.component";
import { HomeComponent } from "./home/home.component";
import { GridComponent } from "./grid/grid.component";
import { CardComponent } from "./card/card.component";
import { LoaderComponent } from "./assets/loader/loader.component";

import { LoaderService } from "./services/loader.service";
import { SubmissionComponent } from "./submission/submission.component";
import { ToastComponent } from './assets/toast/toast.component';

const BASE_URL = "http://localhost:3000";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "submit", component: SubmitComponent },
  { path: "submit/:id/edit", component: SubmitComponent },
  { path: "submission/:id", component: SubmissionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StickyComponent,
    HeaderComponent,
    SubmitComponent,
    HomeComponent,
    GridComponent,
    CardComponent,
    LoaderComponent,
    SubmissionComponent,
    ToastComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LoaderService,
    {
      provide: "BASE_URL",
      useFactory: function() {
        return BASE_URL;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

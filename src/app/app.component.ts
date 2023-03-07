import { Component } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "practicaFilter";
  filterModel: string = "";
  personas$: Observable<any>;

  personas: string[] = [
    "Iron Man",
    "Spiderman",
    "Thor",
    "Hulk",
    "Black Widow",
    "Hawk Eye",
  ];
  constructor() {
    this.personas$ = of(this.personas);
  }

  filterList(term: string) {
    if (term.length < 2) {
      this.personas$ = of(this.personas);
    } else {
      this.personas$ = of(
        this.personas.filter((resp) =>
          resp.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  }
}

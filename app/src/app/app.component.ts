import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCurrentUser } from "./selectors/current-user.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ],
})
export class AppComponent {
  title = "Tournament-masterpiece";

  constructor(private readonly store: Store) {
    store.select(selectCurrentUser).subscribe(x => console.log("select:", x));
  }
}

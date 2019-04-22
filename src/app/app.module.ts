import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ManagerComponent } from "./manager/manager.component";
import { EditorComponent } from "./editor/editor.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    EditorComponent,
    ListComponent,
    ManagerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

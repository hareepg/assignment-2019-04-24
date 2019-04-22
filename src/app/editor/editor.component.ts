import { Component, Input, Output, EventEmitter } from "@angular/core";
import TrainingSubscription from "../models/subscription";

@Component({
  selector: "editor",
  templateUrl: "./editor.component.html"
})
export class EditorComponent {
  @Input() subscription: TrainingSubscription;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.save.emit(this.subscription);
  }
}

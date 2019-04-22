import { Component, Input, Output, EventEmitter } from "@angular/core";
import TrainingSubscription from "../models/subscription";

@Component({
  selector: "list",
  templateUrl: "./list.component.html"
})
export class ListComponent {
  @Input() subscriptions: TrainingSubscription[];

  @Output() create = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  initializeNew() {
    this.create.emit();
  }

  initializeEdit(subscription, position) {
    this.edit.emit({ subscription, position });
  }

  initializeDelete(position) {
    this.delete.emit(position);
  }
}

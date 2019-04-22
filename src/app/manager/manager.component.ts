import { Component } from "@angular/core";
import TrainingSubscription from "../models/subscription";

@Component({
  selector: "manager",
  templateUrl: "./manager.component.html"
})
export class ManagerComponent {
  subscriptions: TrainingSubscription[] = [];
  subscriptionUnderEdit: TrainingSubscription = null;
  positionUnderEdit = -1;

  create() {
    this.subscriptionUnderEdit = new TrainingSubscription();
    this.positionUnderEdit = -1;
  }

  onCancel() {
    this.subscriptionUnderEdit = null;
    this.positionUnderEdit = -1;
  }

  edit(info) {
    if (!info) return;
    const { subscription, position } = info;
    if (!subscription) return;

    this.subscriptionUnderEdit = { ...subscription };
    this.positionUnderEdit = position;
  }

  delete(position) {
    if (position > -1 && position < this.subscriptions.length) {
      this.subscriptions.splice(position, 1);
    }
  }

  save(subscription) {
    if (!subscription) return;

    if (this.positionUnderEdit === -1) {
      // new subscription
      this.subscriptions.push(subscription);
    } else {
      // existing subscription
      this.subscriptions[this.positionUnderEdit] = subscription;
    }

    // reset app state
    this.onCancel();
  }
}

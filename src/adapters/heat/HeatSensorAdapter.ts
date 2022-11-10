import { HeatSensorMessage } from "./HeatSensorMessage";
import { Message } from "../Message";

export class HeatSensorAdapter extends Message {
  private adaptee: HeatSensorMessage;

  constructor(adaptee: HeatSensorMessage) {
    super();
    this.adaptee = adaptee;
  }

  public send(message: string): string {
    const result = this.adaptee
      .sendSpecific(message)
      .split("")
      .reverse()
      .join(""); // unreadable message decoded
    return `HeatSensorAdapter(${result})`;
  }
}

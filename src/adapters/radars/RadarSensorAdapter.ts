import { Message } from "../Message";
import { RadarSensorMessage } from "./RadarSensorMessage";

export class RadarSensorAdapter extends Message {
  private adaptee: RadarSensorMessage;

  constructor(adaptee: RadarSensorMessage) {
    super();
    this.adaptee = adaptee;
  }

  public send(message: string): string {
    const result = this.adaptee
      .sendSpecific(message)
      .split("")
      .reverse()
      .join(""); // unreadable message decoded
    return `RadarSensorMessage(${result})`;
  }
}

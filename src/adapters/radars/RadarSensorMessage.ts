export class RadarSensorMessage {
  sendSpecific(message: string) {
    return message.split("").reverse().join(""); // message is unreadable
  }
}

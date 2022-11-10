import { RadarSensorAdapter } from "adapters/radars/RadarSensorAdapter";
import { RadarSensorMessage } from "adapters/radars/RadarSensorMessage";
import { RadarSensor } from "../RadarSensor";

export class VladofRadarSensor extends RadarSensor {
  detectMotion() {
    const message = new RadarSensorAdapter(new RadarSensorMessage());
    const data = message.send("[Vladof] Enemy motion detected");
    this.eventManager.emit(RadarSensor.MOTION_DETECTED, data);
    // specific Radar Sensor code ...
  }
}

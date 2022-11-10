import { HeatSensorAdapter } from "adapters/heat/HeatSensorAdapter";
import { HeatSensorMessage } from "adapters/heat/HeatSensorMessage";
import { HeatSensor } from "../HeatSensor";

export class AtlasHeatSensor extends HeatSensor {
  detectHeat() {
    const message = new HeatSensorAdapter(new HeatSensorMessage());
    const data = message.send("[Atlas] Enemy heat detected");
    this.eventManager.emit(AtlasHeatSensor.HEAT_DETECTED, data);
    // specific Heat Sensor code ...
  }
}

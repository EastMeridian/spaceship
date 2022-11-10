import { HeatSensorAdapter } from "adapters/heat/HeatSensorAdapter";
import { HeatSensorMessage } from "adapters/heat/HeatSensorMessage";
import { HeatSensor } from "../HeatSensor";

export class VladofHeatSensor extends HeatSensor {
  detectHeat() {
    const message = new HeatSensorAdapter(new HeatSensorMessage());
    const data = message.send("[Vladof] Enemy heat detected");
    this.eventManager.emit(HeatSensor.HEAT_DETECTED, data);
    // specific Heat Sensor code ...
  }
}

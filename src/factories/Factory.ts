import { EventManager } from "event";
import { HeatSensor } from "./HeatSensor";
import { RadarSensor } from "./RadarSensor";

export interface Factory {
  createHeatSensor(eventManager: EventManager): HeatSensor;
  createRadarSensor(eventManager: EventManager): RadarSensor;
}

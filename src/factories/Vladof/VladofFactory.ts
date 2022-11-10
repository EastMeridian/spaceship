import { EventManager } from "events";
import { Factory } from "../factory";
import { HeatSensor } from "../HeatSensor";
import { VladofHeatSensor } from "./VladofHeatSensor";
import { RadarSensor } from "../RadarSensor";
import { VladofRadarSensor } from "./VladofRadarSensor";

export class VladofFactory implements Factory {
  public createHeatSensor(eventManager: EventManager): HeatSensor {
    console.log("[Vladof] Creating heat sensor");
    return new VladofHeatSensor(eventManager);
  }

  public createRadarSensor(eventManager: EventManager): RadarSensor {
    console.log("[Vladof] Creating radar sensor");
    return new VladofRadarSensor(eventManager);
  }
}

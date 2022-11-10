import { EventManager } from "EventManager";
import { Factory } from "../factory";
import { AtlasHeatSensor } from "./AtlasHeatSensor";
import { HeatSensor } from "../HeatSensor";
import { AtlasRadarSensor } from "./AltlasRadarSensor";
import { RadarSensor } from "../RadarSensor";

export class AtlasFactory implements Factory {
  public createHeatSensor(eventManager: EventManager): HeatSensor {
    console.log("[Atlas] Creating radar sensor");
    return new AtlasHeatSensor(eventManager);
  }

  public createRadarSensor(eventManager: EventManager): RadarSensor {
    console.log("[Atlas] Creating heat sensor");
    return new AtlasRadarSensor(eventManager);
  }
}

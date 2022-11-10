import { Missile, Shield } from "defense";
import { ShipControls } from "commands/ShipControls";
import { VladofFactory } from "factories";
import { AtlasFactory } from "factories/Atlas/AtlasFactory";
import { ShipEventManager } from "EventManager";
import { RadarSensor } from "factories/RadarSensor";
import { HeatSensor } from "factories/HeatSensor";

const shipEventManager = ShipEventManager.getInstance();

const atlasFactory = new AtlasFactory();
const vladofFactory = new VladofFactory();

const radarSensor = atlasFactory.createRadarSensor(shipEventManager);
const heatSensor = vladofFactory.createHeatSensor(shipEventManager);

const shield = new Shield();
const missile = new Missile();
const shipControls = new ShipControls(shield, missile);

shipEventManager.on(RadarSensor.MOTION_DETECTED, shipControls);
shipEventManager.on(HeatSensor.HEAT_DETECTED, shipControls);

radarSensor.detectMotion();
heatSensor.detectHeat();

const ThreatLevel = Math.random();

console.log("ThreatLevel: ", ThreatLevel);

if (ThreatLevel > 0.5) {
  shipControls.setCurrentCommand("launchMissile");
  shipControls.executeCommand();
} else {
  shipControls.setCurrentCommand("turnOffShield");
  shipControls.executeCommand();
}

import { ShipEventManager } from "event";
import { RadarSensor } from "factories/RadarSensor";
import { AtlasRadarSensor } from "../factories/Atlas/AltlasRadarSensor";

describe("AltasRadarSensor", () => {
  it("should send an event manager message", () => {
    const eventManager = ShipEventManager.getInstance();
    const update = jest.fn();
    eventManager.on(RadarSensor.MOTION_DETECTED, { update });
    const atlasRadarSensor = new AtlasRadarSensor(eventManager);
    atlasRadarSensor.detectMotion();
    expect(update).toHaveBeenCalled();
  });
});

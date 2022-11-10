import { ShipEventManager } from "events";
import { RadarSensor } from "factories/RadarSensor";
import { AtlasRadarSensor } from "./AltlasRadarSensor";

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

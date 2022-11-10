import { ShipEventManager } from "events";
import { HeatSensor } from "factories/HeatSensor";
import { AtlasHeatSensor } from "./AtlasHeatSensor";

describe("AltasHeatSensor", () => {
  it("should send an event manager message", () => {
    const eventManager = ShipEventManager.getInstance();
    const update = jest.fn();
    eventManager.on(HeatSensor.HEAT_DETECTED, { update });
    const atlasRadarSensor = new AtlasHeatSensor(eventManager);
    atlasRadarSensor.detectHeat();
    expect(update).toHaveBeenCalled();
  });
});

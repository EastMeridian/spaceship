import { RadarSensorAdapter } from "adapters/radars/RadarSensorAdapter";
import { RadarSensorMessage } from "adapters/radars/RadarSensorMessage";

const TEXT = "RadarSensorMessage(An enemy detected)";

describe("RadarSensorAdapter", () => {
  it("should decode a crypted message", () => {
    const message = new RadarSensorAdapter(new RadarSensorMessage());
    const data = message.send("An enemy detected");
    expect(data).toBe(TEXT);
  });
});

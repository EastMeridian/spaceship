import { RadarSensorAdapter } from "./RadarSensorAdapter";
import { RadarSensorMessage } from "./RadarSensorMessage";

const TEXT = "RadarSensorMessage(An enemy detected)";

describe("RadarSensorAdapter", () => {
  it("should decode a crypted message", () => {
    const message = new RadarSensorAdapter(new RadarSensorMessage());
    const data = message.send("An enemy detected");
    expect(data).toBe(TEXT);
  });
});

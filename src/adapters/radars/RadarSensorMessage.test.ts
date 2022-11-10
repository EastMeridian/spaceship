import { RadarSensorMessage } from "./RadarSensorMessage";

const TEXT = "An enemy detected";
const CRYPTED_TEXT = "detceted ymene nA";

describe("RadarSensorAdapter", () => {
  it("should decode a crypted message", () => {
    const message = new RadarSensorMessage();
    const data = message.sendSpecific(TEXT);
    expect(data).toBe(CRYPTED_TEXT);
  });
});

import { RadarSensorMessage } from "../adapters/radars/RadarSensorMessage";

const TEXT = "An enemy detected";
const CRYPTED_TEXT = "detceted ymene nA";

describe("RadarSensorMessage", () => {
  it("should decode a crypted message", () => {
    const message = new RadarSensorMessage();
    const data = message.sendSpecific(TEXT);
    expect(data).toBe(CRYPTED_TEXT);
  });
});

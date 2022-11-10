import { ShipEventManager } from "./EventManager";

const EVENT_A = "EVENT_A";
const EVENT_B = "EVENT_B";

describe("EventManager", () => {
  it("should be a singleton and only have one instance", () => {
    const instanceA = ShipEventManager.getInstance();
    const instanceB = ShipEventManager.getInstance();
    expect(instanceA).toStrictEqual(instanceB);
  });

  it("should register observer and notify it", () => {
    const eventManager = ShipEventManager.getInstance();
    const update = jest.fn();
    eventManager.on(EVENT_A, { update });
    eventManager.emit(EVENT_A);
    expect(update).toBeCalled();
  });

  it("should not notify observer on others events", () => {
    const eventManager = ShipEventManager.getInstance();
    const update = jest.fn();
    eventManager.on(EVENT_B, { update });
    eventManager.emit(EVENT_A);
    expect(update).not.toHaveBeenCalled();
  });
});

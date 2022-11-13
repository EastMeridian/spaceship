import { ShipControls } from "../commands/ShipControls";

describe("ShipControls", () => {
  const turnOn = jest.fn();
  const turnOff = jest.fn();
  const launch = jest.fn();
  const shield = { turnOn, turnOff };
  const missile = { launch };
  const shipControls = new ShipControls(shield, missile);

  it("should not execute command if no current command", () => {
    shipControls.executeCommand();
    expect(turnOn).not.toHaveBeenCalled();
    expect(turnOff).not.toHaveBeenCalled();
    expect(launch).not.toHaveBeenCalled();
  });

  it("should execute each current command", () => {
    shipControls.setCurrentCommand("turnOnShield");
    shipControls.executeCommand();
    expect(turnOn).toHaveBeenCalled();

    shipControls.setCurrentCommand("turnOffShield");
    shipControls.executeCommand();
    expect(turnOff).toHaveBeenCalled();

    shipControls.setCurrentCommand("launchMissile");
    shipControls.executeCommand();
    expect(launch).toHaveBeenCalled();
  });

  it("should turn on shield on update if shield off", () => {
    shipControls.update();
    expect(turnOn).toHaveBeenCalledTimes(2);
    shipControls.update();
    expect(turnOn).toHaveBeenCalledTimes(2);
  });
});

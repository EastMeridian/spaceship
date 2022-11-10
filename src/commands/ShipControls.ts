import { Missile, Shield } from "defense";
import { Observer } from "event";
import { TurnOnShieldCommand } from "./TurnOnShield";
import { Command } from "./Command";
import { TurnOffShieldCommand } from "./TurnOffShield";
import { LaunchMissileCommand } from "./LaunchMissile";

export class ShipControls implements Observer {
  private commands: Record<string, Command>;
  private currentCommand?: string;
  constructor(shield: Shield, missile: Missile) {
    this.commands = {
      turnOnShield: new TurnOnShieldCommand(shield),
      turnOffShield: new TurnOffShieldCommand(shield),
      launchMissile: new LaunchMissileCommand(missile),
    };
  }

  public setCurrentCommand(name: string) {
    this.currentCommand = name;
  }

  public executeCommand() {
    if (this.currentCommand) {
      this.commands[this.currentCommand]?.execute();
    }
  }

  public update(data?: any): void {
    console.log("Ship controls received: ", data);

    if (this.currentCommand !== "turnOnShield") {
      this.setCurrentCommand("turnOnShield");

      this.executeCommand();
    }
  }
}

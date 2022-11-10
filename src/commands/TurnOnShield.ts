import { Shield } from "defense";
import { Command } from "./Command";

export class TurnOnShieldCommand implements Command {
  private shield: Shield;

  constructor(shield: Shield) {
    this.shield = shield;
  }

  public execute(): void {
    this.shield.turnOn();
  }
}

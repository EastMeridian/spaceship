import { Missile } from "defense";
import { Command } from "./Command";

export class LaunchMissileCommand implements Command {
  private missile: Missile;

  constructor(missile: Missile) {
    this.missile = missile;
  }

  public execute(): void {
    this.missile.launch();
  }
}

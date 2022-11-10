import { EventManager } from "EventManager";

export abstract class HeatSensor {
  static HEAT_DETECTED = "HEAT_DETECTED";

  protected eventManager: EventManager;

  constructor(eventManager: EventManager) {
    this.eventManager = eventManager;
  }

  public abstract detectHeat(): void;
}

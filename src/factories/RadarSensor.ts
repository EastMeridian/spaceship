import { EventManager } from "event";

export abstract class RadarSensor {
  static MOTION_DETECTED = "MOTION_DETECTED";

  protected eventManager: EventManager;

  constructor(eventManager: EventManager) {
    this.eventManager = eventManager;
  }

  public abstract detectMotion(): void;
}

export interface Observer {
  update(data: any): void;
}

export interface EventManager {
  on(event: string, observable: Observer): void;
  emit(event: string, data?: any): void;
}

export class ShipEventManager implements EventManager {
  private static instance: ShipEventManager;
  private subscribers: Record<string, Observer[]>;

  private constructor() {
    this.subscribers = {};
  }

  public static getInstance(): ShipEventManager {
    if (!ShipEventManager.instance) {
      ShipEventManager.instance = new ShipEventManager();
    }

    return ShipEventManager.instance;
  }

  on(event: string, observable: Observer) {
    if (!this.subscribers[event]) this.subscribers[event] = [];

    this.subscribers[event].push(observable);
  }

  emit(event: string, data?: any) {
    this.subscribers[event]?.forEach((observable) => observable.update(data));
  }
}

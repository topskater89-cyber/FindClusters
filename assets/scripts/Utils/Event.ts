import { IEvent, type EventHandler } from '../Utils/Abstract/IEvent';

export class Event<T> implements IEvent<T>{
  private listeners = new Set<EventHandler<T>>();

  subscribe(listener: EventHandler<T>) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: EventHandler<T>) {
    this.listeners.delete(listener);
  }

  invoke(data: T) {
    for (const listener of this.listeners) {
      listener(data);
    }
  }
}


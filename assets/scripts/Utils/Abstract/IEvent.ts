export type EventHandler<T> = (data: T) => void;

export interface IEvent<T> {
  subscribe(listener: EventHandler<T>);

  unsubscribe(listener: EventHandler<T>);
}

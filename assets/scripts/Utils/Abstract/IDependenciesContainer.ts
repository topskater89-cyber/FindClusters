
export type Constructor<T> = new (...args: any[]) => T;

export interface IDependenciesContainer {
    get<T>(type: Constructor<T>): T;
    register<T>(type: Constructor<T>, instance: T): void;
}
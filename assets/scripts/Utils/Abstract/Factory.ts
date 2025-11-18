export type Constructor<T> = new (...args: any[]) => T;

export abstract class Factory {
    abstract register<T>(key: string, ctor: Constructor<T>): void;
    abstract create<T>(key: string, ...args: any[]): T;
}





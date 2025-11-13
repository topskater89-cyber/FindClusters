
export interface IDIContainer {
    get<T>(token: Symbol): T;
    register<T>(token: Symbol, instance: T): void;
}

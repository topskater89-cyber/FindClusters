
export interface IDependenciesContainer {
    get<T>(token: Symbol): T;
    register<T>(token: Symbol, instance: T): void;
}

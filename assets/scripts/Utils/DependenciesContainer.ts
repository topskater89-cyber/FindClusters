import { _decorator, Component, Node } from 'cc';
import { Constructor, IDependenciesContainer } from './Abstract/IDependenciesContainer';

export class DependenciesContainer {
    private _dependencies = new Map<Constructor<any>, unknown>();

    register<T>(type: Constructor<T>, instance: T): void {
        if (this._dependencies.has(type)) {
            throw new Error(`[DIContainer] Type '${type.name}' already registered.`);
        }

        this._dependencies.set(type, instance);
    }

    get<T>(type: Constructor<T>): T {
        const instance = this._dependencies.get(type);

        if (!instance) {
            throw new Error(`[DIContainer] Type '${type.name}' not registered.`);
        }

        return instance as T;
    }
}



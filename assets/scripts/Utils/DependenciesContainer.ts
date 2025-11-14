import { _decorator, Component, Node } from 'cc';
import { IDependenciesContainer } from './Abstract/IDependenciesContainer';

const { ccclass, property } = _decorator;

@ccclass('DependenciesContainer')
export class DependenciesContainer implements IDependenciesContainer {
    private _dependencies = new Map<Symbol, unknown>();


    get<T>(token: Symbol): T {
        const instance = this._dependencies.get(token);

        if (!instance) {
            throw new Error(`[DIContainer] Instance for token '${String(token)}' not found.`);
        }

        return instance as T;
    }

    register<T>(token: Symbol, instance: T): void {
        if (this._dependencies.has(token)) {
            throw new Error(`[DIContainer] Token '${String(token)}' already registered.`);
        }

        this._dependencies.set(token, instance);
    }
}



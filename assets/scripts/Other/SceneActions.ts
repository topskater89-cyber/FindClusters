import { ISceneActions } from './ISceneActions';
import { IEvent } from "../Utils/Abstract/IEvent";
import { Event } from "../Utils/Event";

export const SceneActionsToken = Symbol("SceneActions");

export class SceneActions implements ISceneActions {
    private _onUserInitiatedBlockGeneration : Event<void>;

    
    get OnUserInitiatedBlockGeneration() : IEvent<void>{
        return this._onUserInitiatedBlockGeneration;
    }


    public constructor() {
        this._onUserInitiatedBlockGeneration = new Event();
    }


    public InitiateGeneration(){
        this._onUserInitiatedBlockGeneration.invoke();
    }
}



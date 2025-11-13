import { IEvent } from "../Utils/Abstract/IEvent";

export const ISceneActionsToken = Symbol("ISceneActions");

export interface ISceneActions {
    readonly OnUserInitiatedBlockGeneration: IEvent<void>;
}

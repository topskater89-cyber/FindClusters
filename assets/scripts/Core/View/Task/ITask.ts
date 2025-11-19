import { IEvent } from "../../../Utils/Abstract/IEvent";

export interface ITask {
    readonly OnCompleted : IEvent<void>;
}


